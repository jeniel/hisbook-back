import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { MissedLogoutTicket } from '@/generated/missed-logout-ticket/missed-logout-ticket.model';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { MissedLogoutTicketArgs } from './args/ticket.args';
import { MissedLogoutTicketList } from './entities/ticket.entity';

import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { TicketService } from './ticket.service';

// Import Roles
import { Role } from '@/generated/prisma/role.enum';
import { CurrentUser } from '@/shared/common/decorator/currentUser.decorator';
import { Roles } from '@/shared/common/decorator/roles.decorator';

@Resolver(() => MissedLogoutTicket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createTicket(@Args('payload') payload: CreateTicketInput) {
    return this.ticketService.create(payload);
  }

  // Find All
  @Roles([Role.ADMIN])
  @Query(() => MissedLogoutTicketList)
  async findAllTickets(@Args() args: MissedLogoutTicketArgs) {
    return await this.ticketService.findAll(args);
  }

  // Find by ID
  @Query(() => MissedLogoutTicket, { nullable: true })
  findTicketbyID(@Args('id') id: string) {
    return this.ticketService.findById(id);
  }

  // Find Ticket by User
  @Query(() => MissedLogoutTicketList)
  findTicketsByUser(
    @Args('userId') userId: string,
    @Args() args: MissedLogoutTicketArgs,
  ) {
    return this.ticketService.findByUser(userId, args);
  }

  @Query(() => MissedLogoutTicketList)
  getMyWorkedTickets(
    @Args('userId') userId: string,
    @Args() args: MissedLogoutTicketArgs,
  ) {
    return this.ticketService.findWorkedTickets(userId, args);
  }

  // Update
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  updateTicket(
    @Args('id') id: string,
    @Args('payload') payload: UpdateTicketInput,
    @CurrentUser() user: { userId: string },
  ) {
    return this.ticketService.update(id, payload, user.userId);
  }

  // Delete
  @Roles([Role.ADMIN])
  @Mutation(() => GeneralMsg)
  deleteTicket(@Args('id') id: string) {
    return this.ticketService.delete(id);
  }
}
