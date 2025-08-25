import { Module } from '@nestjs/common';
import { UserService } from '@/modules/global/user/user.service';
import { UserResolver } from '@/modules/global/user/user.resolver';
import { AuthModule } from '@/core/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
