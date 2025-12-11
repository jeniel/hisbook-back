import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { TicketArgs } from './args/ticket.args';
import { TicketList } from './entities/ticket.entity';

import { Ticket } from '@/generated/ticket/ticket.model';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { TicketService } from './ticket.service';

// Import Roles
import { Role } from '@/generated/prisma/role.enum';
import { CurrentUser } from '@/shared/common/decorator/currentUser.decorator';
import { CurrentUserId } from '@/shared/common/decorator/currentUserId.decorator';
import { Roles } from '@/shared/common/decorator/roles.decorator';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createTicket(@Args('payload') payload: CreateTicketInput) {
    return this.ticketService.create(payload);
  }

  // Find All
  @Roles([Role.ADMIN])
  @Query(() => TicketList)
  async findAllTickets(@Args() args: TicketArgs) {
    return await this.ticketService.findAll(args);
  }

  // Find by ID
  @Query(() => Ticket, { nullable: true })
  findTicketbyID(@Args('id') id: string) {
    return this.ticketService.findById(id);
  }

  // Find Ticket by User
  @Query(() => TicketList)
  findTicketsByUser(@Args('userId') userId: string, @Args() args: TicketArgs) {
    return this.ticketService.findByUser(userId, args);
  }

  // Find Ticket by Department
  @Query(() => TicketList)
  findTicketsByDepartment(
    // @Args('departmentId') departmentId: string,
    @Args() args: TicketArgs,
    @CurrentUserId() departmentId: string,
  ) {
    return this.ticketService.findByDepartment(departmentId, args);
  }

  // Find Tickets Worked by User
  @Query(() => TicketList)
  findTicketsWorkedByUser(
    @Args('userId') userId: string,
    @Args() args: TicketArgs,
  ) {
    return this.ticketService.findTicketsWorkedByUser(userId, args);
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

  // 👇 Computed field for formatted status
  @ResolveField(() => String)
  statusFormatted(@Parent() ticket: Ticket): string {
    return ticket.status.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  @Mutation(() => String)
  @Roles([Role.ADMIN])
  async exportTicketsBase64(): Promise<string> {
    const buffer = await this.ticketService.exportTicketsExcel();
    return buffer.toString('base64'); // GraphQL only allows JSON, so Base64
  }
}
