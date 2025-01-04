import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/accesstoken.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService, AccessTokenStrategy, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
