import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as argon from 'argon2';
import { Response, Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInInput } from './dto/signin-input';
import { SignUpInput } from './dto/signup-input';
import { JwtPayload2 } from 'src/common/types/jwtPayload';
import { Role } from 'src/@generated/prisma/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(signUpInput: SignUpInput) {
    try {
      const hashedPassword = await argon.hash(signUpInput.password);
      const user = await this.prisma.user.create({
        data: {
          username: signUpInput.username,
          hashedPassword,
          email: signUpInput.email,
          profile: {
            create: {
              firstName: signUpInput.firstName,
              middleName: signUpInput.middleName,
              lastName: signUpInput.lastName,
              designation: signUpInput.designation,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      const { accessToken, refreshToken } = await this.createTokens(
        user.id,
        user.email,
        user.username,
        user.profile.id,
        user.profile.departmentId,
        user.role as Role[],
      );
      await this.updateRefresh(user.id, refreshToken);
      ``;
      return { accessToken, refreshToken, user };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credetials Taken');
        }
      }
      throw error;
    }
  }

  async signin(
    signInInput: SignInInput,
    context: { res: Response; req: Request },
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signInInput.email,
        username: signInInput.username,
      },
      include: {
        profile: true,
      },
    });

    if (!user) throw new ForbiddenException('Email or User Not Registered');

    const pwMatches = await argon.verify(
      user.hashedPassword,
      signInInput.password,
    );
    if (!pwMatches) throw new ForbiddenException('Password incorrect');

    // if (!user.isApprove)
    //   throw new ForbiddenException('You Account Is Waiting For Approval');

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
      user.username,
      user.profile.id,
      user.profile.departmentId,
      user.role as Role[],
    );

    await this.updateRefresh(user.id, refreshToken);

    context.res.cookie('his-token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    // response.cookie('token', accessToken, {});

    return { accessToken, refreshToken, user, isSignedIn: true };
  }

  async logOut(context: { res: Response; req: Request }) {
    context.res.clearCookie('his-token');
    return { message: 'Logged Out' };
  }

  async clearCookie(response: any) {
    response.clearCookie('his-token');
    return { message: 'Logged Out' };
  }

  // ! Helper function
  async createTokens(
    userId: string,
    email: string,
    username: string,
    profileId: string,
    departmentId: string,
    role: Role[],
  ) {
    const accessToken = await this.jwt.sign(
      {
        userId,
        email,
        username,
        profileId,
        departmentId,
        role,
      },
      { expiresIn: '5h', secret: this.config.get('JWT_SECRET') },
    );

    const refreshToken = await this.jwt.sign(
      {
        userId,
        email,
        username,
        accessToken,
      },
      { expiresIn: '7d', secret: this.config.get('JWT_REFRESH_TOKEN') },
    );

    return { accessToken, refreshToken };
  }

  async updateRefresh(userId: string, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken },
    });
  }

  async verifyToken(accessToken: string) {
    try {
      await this.jwt.verifyAsync(accessToken, {
        secret: this.config.get('JWT_SECRET'),
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  async validateUser(payload: JwtPayload2) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.userId },
    });
    if (!user) {
      return false;
    }
    return true;
  }
  // ! Helper function

  // ? END
  async meQuery(context: { res: Response; req: Request }) {
    const token = context.req.cookies['his-token'];

    const currentUser = this.jwt.verify(token, {
      secret: this.config.get('JWT_SECRET'),
    });

    const me = await this.prisma.user.findUnique({
      where: {
        id: currentUser.userId,
      },
      include: {
        profile: {
          include: {
            department: true,
          },
        },
      },
    });

    return {
      user: me,
      isSignedIn: true,
    };
  }
}
