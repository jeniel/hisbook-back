import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpInput } from './dto/signup-input';
import { Prisma } from '@prisma/client';
import { SignInInput } from './dto/signin-input';

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
      });

      const { accessToken, refreshToken } = await this.createTokens(
        user.id,
        user.email,
        user.username,
      );
      await this.updateRefresh(user.id, refreshToken);
``
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

  async signin(signInInput: SignInInput) {
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

    if (!user.isApprove)
      throw new ForbiddenException('You Account Is Waiting For Approval');

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
      user.username,
    );
    await this.updateRefresh(user.id, refreshToken);

    // response.cookie('token', accessToken, {});\
    // console.log(response.cookie('token', accessToken, {}));
    return { accessToken, refreshToken, user };
  }

  // ! Helper function
  async createTokens(userId: string, email: string, username: string) {
    const accessToken = await this.jwt.sign(
      {
        userId,
        email,
        username,
      },
      { expiresIn: '8h', secret: this.config.get('JWT_SECRET') },
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
      return { isValid: true };
    } catch (error) {
      return { isValid: false };
    }
  }
  // ! Helper function

  // ? END
}
