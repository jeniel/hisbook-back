import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { MissedLogoutTicket } from '@/generated/missed-logout-ticket/missed-logout-ticket.model';
import { MissedLogoutTicketArgs } from './args/ticket.args';
import { MissedLogoutTicketList } from './entities/ticket.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';

import { TicketService } from './ticket.service';
import { CreateMissedLogoutTicketInput } from './dto/create-ticket.input';
import { UpdateMissedLogoutTicketInput } from './dto/update-ticket.input';

// Import Roles
import { Roles } from '@/shared/common/decorator/roles.decorator';
import { Role } from '@/generated/prisma/role.enum';

@Resolver(() => MissedLogoutTicket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createMissedLogoutTicket(
    @Args('payload') payload: CreateMissedLogoutTicketInput,
  ) {
    return this.ticketService.create(payload);
  }

  // Find All
  @Roles([Role.ADMIN])
  @Query(() => MissedLogoutTicketList)
  async findAllMissedLogoutTickets(@Args() args: MissedLogoutTicketArgs) {
    return await this.ticketService.findAll(args);
  }

  // Find Ticket by User
  @Query(() => MissedLogoutTicketList)
  findTicketsByUser(
    @Args('userId') userId: string,
    @Args() args: MissedLogoutTicketArgs,
  ) {
    return this.ticketService.findByUser(userId, args);
  }

  // Update
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  updateMissedLogoutTicket(
    @Args('id') id: string,
    @Args('payload') payload: UpdateMissedLogoutTicketInput,
  ) {
    return this.ticketService.update(id, payload);
  }

  // Delete
  @Roles([Role.ADMIN])
  @Mutation(() => GeneralMsg)
  deleteMissedLogoutTicket(@Args('id') id: string) {
    return this.ticketService.delete(id);
  }
}
