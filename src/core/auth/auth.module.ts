import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthResolver } from '@/core/auth/auth.resolver';
import { AuthService } from '@/core/auth/auth.service';
import { AccessTokenStrategy } from '@/core/auth/strategies/accesstoken.strategy';
import { AccessTokenGuard } from '@/shared/common/guards/accessToken.guard';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [AuthResolver, AuthService, AccessTokenStrategy, AccessTokenGuard],
  exports: [AuthService, JwtModule, AccessTokenGuard],
})
export class AuthModule {}
