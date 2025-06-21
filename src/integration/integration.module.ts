import { Module } from '@nestjs/common';
import { FbModule } from './fb/fb.module';

@Module({
  imports: [FbModule]
})
export class IntegrationModule {}
