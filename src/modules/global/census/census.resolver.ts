import { Resolver, Query, Args } from '@nestjs/graphql';
import { CensusService } from './census.service';
import { CensusSummary } from './dto/census.dto';

@Resolver(() => CensusSummary)
export class CensusResolver {
  constructor(private readonly censusService: CensusService) {}

  @Query(() => CensusSummary)
  async getCensusSummary(
    @Args('userId', { type: () => String, nullable: true }) userId?: string,
  ): Promise<CensusSummary> {
    return this.censusService.getSummary(userId);
  }
}
