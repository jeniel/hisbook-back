import { Module } from '@nestjs/common';
import { AuthResolver } from '@/core/auth/auth.resolver';
import { AuthService } from '@/core/auth/auth.service';
import { AccessTokenStrategy } from '@/core/auth/strategies/accesstoken.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService, AccessTokenStrategy, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
