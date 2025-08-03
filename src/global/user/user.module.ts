import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { ToolsModule } from 'src/tools/tools.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ToolsModule, AuthModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
