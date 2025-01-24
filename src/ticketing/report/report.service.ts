import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketArgs } from './args/report.args';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}

  async getTicketCount(args: TicketArgs) {
    const ticketCounts = await this.prisma.ticketTransaction.groupBy({
      by: ['status'],
      where: args.where,
      _count: {
        status: true,
      },
    });

    const formattedCounts = ticketCounts.map((tc) => ({
      count: tc._count.status,
      status: tc.status,
    }));

    return {
      message: 'Ticket count',
      data: formattedCounts,
    };
  }
}
