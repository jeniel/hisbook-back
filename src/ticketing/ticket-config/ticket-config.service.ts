import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertCategInput } from './dto/upsert-ticket-config.input';

@Injectable()
export class TicketConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async upsertCategory(payload: UpsertCategInput, categoryId: string) {
    await this.prisma.ticketCategory.upsert({
      where: {
        id: categoryId || '',
      },
      update: payload,
      create: payload,
    });

    return {
      message: 'Ticket Category upserted successfully',
    };
  }
}
