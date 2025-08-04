import {
  ForbiddenException,
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import * as argon from 'argon2';
import * as crypto from 'crypto';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { MailService } from '@/modules/tools/mail/mail.service';
import { UserProfileArgs } from '@/modules/global/user/args/user.args';
import { CreateUserProfileInput } from '@/modules/global/user/dto/create-user.input';
import { InviteUserInput, CompleteProfileInput } from '@/modules/global/user/dto/invite-user.input';
import {
  InviteUserResponse,
  CompleteProfileResponse,
} from '@/modules/global/user/dto/invite-user.response';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) {}

  async createSuperAdmin(payload: CreateUserProfileInput) {
    const hashedPassword = await argon.hash(payload.user.hashedPassword);
    try {
      await this.prisma.user.create({
        data: {
          ...payload.user,
          hashedPassword,
          role: payload.user.role,
          isActive: true,
          isApprove: true,
          profile: {
            create: {
              ...payload.profile,
            },
          },
        },
      });

      return {
        message: 'User created successfully',
        success: true,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credetials Taken');
        }
      }
      throw error;
    }
  }

  async inviteUser(
    payload: InviteUserInput,
    invitedBy: string,
  ): Promise<InviteUserResponse> {
    try {
      // Validate tenant exists
      const tenant = await this.prisma.tenant.findUnique({
        where: { id: payload.tenantId },
      });

      if (!tenant) {
        throw new BadRequestException('Invalid tenant ID');
      }

      // Check if user with email already exists in the same tenant
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email: payload.email,
          tenantId: payload.tenantId,
        },
      });

      if (existingUser) {
        throw new BadRequestException(
          'User with this email already exists in this tenant',
        );
      }

      // Generate secure invitation token
      const invitationToken = crypto.randomBytes(32).toString('hex');
      const invitationExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

      // Generate temporary password for initial user creation
      const tempPassword = crypto.randomBytes(16).toString('hex');
      const hashedPassword = await argon.hash(tempPassword);

      // Generate temporary username from email and tenant
      const username =
        payload.email.split('@')[0] +
        '_' +
        crypto.randomBytes(4).toString('hex');

      // Create user with temporary data
      const user = await this.prisma.user.create({
        data: {
          email: payload.email,
          username,
          hashedPassword,
          role: payload.role,
          isActive: false, // Keep inactive until profile completion
          isApprove: false,
          createdBy: invitedBy,
          tenantId: payload.tenantId,
          profile: {
            create: {
              createdBy: invitedBy,
            },
          },
        },
        include: {
          profile: true,
          tenant: true,
        },
      });

      // Update user with invitation token (using hashedRefreshToken temporarily)
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          hashedRefreshToken: await argon.hash(invitationToken), // Store hashed token
        },
      });

      // Generate invitation link
      const frontendUrl = this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000');
      const invitationLink = `${frontendUrl}/complete-profile?token=${invitationToken}&email=${encodeURIComponent(payload.email)}&tenant=${encodeURIComponent(payload.tenantId)}`;

      // Send invitation email with tenant information
      await this.mailService.sendInvitationEmail(
        payload.email,
        invitationLink,
        payload.role.join(', '),
        tenant.name,
      );

      return {
        message: 'Invitation sent successfully',
        invitationToken,
        invitationLink,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'User with this email already exists in this tenant',
          );
        }
      }
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw error;
    }
  }

  async completeProfile(
    payload: CompleteProfileInput,
  ): Promise<CompleteProfileResponse> {
    try {
      // Find user by checking the hashed token with additional security checks
      const users = await this.prisma.user.findMany({
        where: {
          isActive: false, // User must be inactive
          hashedRefreshToken: { not: null }, // Must have an invitation token
          // Add time-based check: only users created within last 24 hours can complete profile
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
          },
        },
        include: {
          profile: true,
          tenant: true,
        },
      });

      let targetUser = null;
      for (const user of users) {
        if (user.hashedRefreshToken) {
          const isValidToken = await argon.verify(
            user.hashedRefreshToken,
            payload.token,
          );
          if (isValidToken) {
            targetUser = user;
            break;
          }
        }
      }

      if (!targetUser) {
        throw new BadRequestException(
          'Invalid, expired, or already used invitation token',
        );
      }

      // Additional security: check if this is really an invited user (has minimal profile data)
      if (targetUser.profile?.firstName || targetUser.profile?.lastName) {
        throw new BadRequestException('This invitation has already been used');
      }

      // Hash the new password
      const hashedPassword = await argon.hash(payload.password);

      // Normalize username (validation is handled by DTO decorators)
      const username = payload.username.toLowerCase().trim();

      // Check for username uniqueness globally (across all tenants) or within tenant
      const existingUser = await this.prisma.user.findFirst({
        where: {
          username,
          // Option 1: Global uniqueness
          id: { not: targetUser.id },
          // Option 2: Tenant-specific uniqueness (uncomment if preferred)
          // tenantId: targetUser.tenantId,
          // id: { not: targetUser.id },
        },
      });

      if (existingUser) {
        throw new BadRequestException(
          'Username is already taken. Please choose a different username',
        );
      }

      // Update user with actual data
      await this.prisma.user.update({
        where: { id: targetUser.id },
        data: {
          username,
          hashedPassword,
          isActive: true,
          hashedRefreshToken: null, // Clear the invitation token
          updatedBy: targetUser.id,
        },
      });

      // Update profile with actual data
      await this.prisma.profile.update({
        where: { userId: targetUser.id },
        data: {
          firstName: payload.firstName,
          middleName: payload.middleName,
          lastName: payload.lastName,
          birthDate: payload.birthDate,
          updatedBy: targetUser.id,
        },
      });

      // Send welcome email with tenant information
      await this.mailService.sendWelcomeEmailToUser(
        targetUser.email,
        `${payload.firstName} ${payload.lastName}`,
        targetUser.tenant?.name,
      );

      return {
        message: 'Profile completed successfully',
        userId: targetUser.id,
        success: true,
        email: targetUser.email,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to complete profile');
    }
  }

  async validateInvitationToken(
    token: string,
    email: string,
    tenantId?: string,
  ): Promise<boolean> {
    try {
      const whereClause: any = {
        email,
        isActive: false, // Must be inactive
        hashedRefreshToken: { not: null }, // Must have token
        // Check if invitation is still within valid time window (24 hours)
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      };

      if (tenantId) {
        whereClause.tenantId = tenantId;
      }

      const user = await this.prisma.user.findFirst({
        where: whereClause,
        include: { profile: true, tenant: true },
      });

      if (!user || !user.hashedRefreshToken) {
        return false;
      }

      // Check if invitation has already been used
      if (user.profile?.firstName || user.profile?.lastName) {
        return false;
      }

      return await argon.verify(user.hashedRefreshToken, token);
    } catch (error) {
      return false;
    }
  }

  async checkUsernameAvailability(
    username: string,
    tenantId?: string,
  ): Promise<boolean> {
    try {
      const normalizedUsername = username.toLowerCase().trim();

      // Basic validation (detailed validation is in DTO)
      if (normalizedUsername.length < 3 || normalizedUsername.length > 30) {
        return false;
      }

      if (!/^[a-zA-Z0-9._-]+$/.test(normalizedUsername)) {
        return false;
      }

      // Check if username is available
      const existingUser = await this.prisma.user.findFirst({
        where: {
          username: normalizedUsername,
          // Option 1: Global uniqueness
          // Option 2: Tenant-specific uniqueness (uncomment if preferred)
          // tenantId: tenantId,
        },
      });

      return !existingUser; // Return true if username is available
    } catch (error) {
      return false;
    }
  }

  async findAll(args: UserProfileArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.profile.count({ where: args.where }),
      this.prisma.profile.findMany({
        where: args.where,
        take: perPage,
        skip,
        include: {
          user: {
            include: {
              tenant: true,
            },
          },
        },
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next: page < lastPage ? page + 1 : null,
      },
    };
  }

  async findOne(profileId: string) {
    return await this.prisma.profile.findUnique({
      where: {
        id: profileId,
      },
      include: {
        user: true,
        department: true,
      },
    });
  }

  // async createTenantAdmin(payload: any) {
  //   const hashedPassword = await argon.hash(payload.user.hashedPassword);
  //   try {
  //     await this.prisma.user.create({
  //       data: {
  //         ...payload.user,
  //         hashedPassword,
  //         profile: {
  //           create: {
  //             ...payload.profile,
  //           },
  //         },
  //       },
  //     });

  //     return {
  //       message: 'User created successfully',
  //     };
  //   } catch (error) {
  //     if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //       if (error.code === 'P2002') {
  //         throw new ForbiddenException('Credetials Taken');
  //       }
  //     }
  //     throw error;
  //   }
  // }

  ///end
}
