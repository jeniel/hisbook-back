import { Module } from '@nestjs/common';
import { FbService } from '@/modules/integration/fb/fb.service';
import { FbResolver } from '@/modules/integration/fb/fb.resolver';

@Module({
  providers: [FbResolver, FbService],
})
export class FbModule {}
