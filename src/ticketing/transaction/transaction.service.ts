import { Injectable } from '@nestjs/common';
import { DecodedToken } from 'src/common/types/decodedToken';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionArgs } from './args/transaction.args';
import { CreateTicket } from './dto/create-transaction.input';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreateTicket, userInfo: DecodedToken) {
    // console.log('userInfo => ', userInfo);
    await this.prisma.ticketTransaction.create({
      data: {
        ...payload,
        ticketCreatedBy: userInfo.profileId,
        departmentFrom: userInfo.departmentId,
      },
    });

    return {
      message: 'Transaction created successfully',
    };
  }

  async findAllTicket(args: TransactionArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.ticketTransaction.count({ where: args.where }),
      this.prisma.ticketTransaction.findMany({
        where: args.where,
        take: perPage,
        skip,
        include: {
          assignedToProfile: true,
          createdByProfile: true,
          toDepartment: true,
          fromDepartment: true,
        },
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
