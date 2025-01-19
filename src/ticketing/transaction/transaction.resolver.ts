import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/common/decorator/currentUser.decorator';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { DecodedToken } from 'src/common/types/decodedToken';
import { CreateTicket } from './dto/create-transaction.input';

import { TicketTransaction } from 'src/@generated/ticket-transaction/ticket-transaction.model';
import { TransactionArgs } from './args/transaction.args';
import { TransactionLists } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';

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
  findOne(@Args('tickerId', { type: () => String }) tickerId: string) {
    return this.transactionService.findOne(tickerId);
  }
}
