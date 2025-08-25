import { Module } from '@nestjs/common';
import { CensusResolver } from './census.resolver';
import { CensusService } from './census.service';

@Module({
  providers: [CensusResolver, CensusService],
})
export class CensusModule {}
