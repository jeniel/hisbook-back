import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TicketConfigService } from './ticket-config.service';
import { TicketConfig } from './entities/ticket-config.entity';
import { UpsertCategInput } from './dto/upsert-ticket-config.input';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver(() => TicketConfig)
export class TicketConfigResolver {
  constructor(private readonly ticketConfigService: TicketConfigService) {}

  @Mutation(() => GeneralMsg)
  upsertTicketCateg(
    @Args('payload')
    payload: UpsertCategInput,
    @Args('categoryId', { nullable: true }) categoryId?: string,
  ) {
    return this.ticketConfigService.upsertCategory(payload, categoryId);
  }
}
