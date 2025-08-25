import { Resolver, Query } from '@nestjs/graphql';
import { CensusSummary } from './dto/census.dto';
import { CensusService } from './census.service';

@Resolver()
export class CensusResolver {
  constructor(private readonly censusService: CensusService) {}

  @Query(() => CensusSummary)
  async getCensusSummary(): Promise<CensusSummary> {
    return this.censusService.getSummary();
  }
}
