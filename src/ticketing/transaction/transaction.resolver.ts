import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/common/decorator/currentUser.decorator';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { DecodedToken } from 'src/common/types/decodedToken';
import { CreateTicket } from './dto/create-transaction.input';

import { TicketTransaction } from 'src/@generated/ticket-transaction/ticket-transaction.model';
import { TransactionArgs } from './args/transaction.args';
import { TransactionLists } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';
import { TicketStatus } from 'src/@generated/prisma/ticket-status.enum';

@Resolver(() => TicketTransaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  // @Roles([Role.USER])
  @Mutation(() => GeneralMsg)
  createTicket(
    @Args('payload') payload: CreateTicket,
    @CurrentUser() userInfo: DecodedToken,
  ) {
    return this.transactionService.create(payload, userInfo);
  }

  @Query(() => TransactionLists, { name: 'findAllTicket' })
  findAll(@Args() ars: TransactionArgs) {
    return this.transactionService.findAllTicket(ars);
  }

  @Query(() => TicketTransaction, { name: 'findOneTicket' })
  findOne(@Args('ticketId', { type: () => String }) ticketId: string) {
    return this.transactionService.findOne(ticketId);
  }

  @Mutation(() => GeneralMsg)
  assignTicket(
    @Args('ticketId', { type: () => String }) ticketId: string,
    @Args('assignedTo', { type: () => String }) assignedTo: string,
    @CurrentUser() userInfo: DecodedToken,
  ) {
    return this.transactionService.assignTicket(ticketId, assignedTo, userInfo);
  }

  //update ticket status
  @Mutation(() => GeneralMsg)
  updateTicketStatus(
    @Args('ticketId', { type: () => String }) ticketId: string,
    @Args('status', { type: () => TicketStatus }) status: TicketStatus,
    @CurrentUser() userInfo: DecodedToken,
  ) {
    return this.transactionService.updateTicketStatus(
      ticketId,
      status,
      userInfo,
    );
  }
}
