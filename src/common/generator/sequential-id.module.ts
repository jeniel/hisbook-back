// src/global/id-generator/sequential-id.module.ts
import { Global, Module } from '@nestjs/common';
import { SequentialIdService } from './sequential-id.service';
@Global()
@Module({
  providers: [SequentialIdService],
  exports: [SequentialIdService],
})
export class SequentialIdModule {}
