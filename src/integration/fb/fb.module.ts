import { Module } from '@nestjs/common';
import { FbService } from './fb.service';
import { FbResolver } from './fb.resolver';

@Module({
  providers: [FbResolver, FbService],
})
export class FbModule {}
