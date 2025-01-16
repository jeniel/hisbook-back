import { Injectable } from '@nestjs/common';
import { DecodedToken } from 'src/common/types/decodedToken';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionArgs } from './args/transaction.args';
import { CreateTransactionInput } from './dto/create-transaction.input';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreateTransactionInput, userInfo: DecodedToken) {
    // console.log('userInfo => ', userInfo);
    await this.prisma.ticketTransaction.create({
      data: {
        ...payload,
        profileId: userInfo.profileId,
      },
    });

    return {
      message: 'Transaction created successfully',
    };
  }

  async findAllTicket(args: TransactionArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 2;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.ticketTransaction.count({ where: args.where }),
      this.prisma.ticketTransaction.findMany({
        where: args.where,
        take: perPage,
        skip,
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next: page < lastPage ? page + 1 : null,
      },
    };
  }

  async findOne(ticketId: string) {
    return await this.prisma.ticketTransaction.findUnique({
      where: { id: ticketId },
    });
  }
  
}
