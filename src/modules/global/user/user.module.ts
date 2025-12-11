import { AuthModule } from '@/core/auth/auth.module';
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [AuthModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
