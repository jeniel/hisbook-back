import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

// Dto and Args
import { MissedLogoutTicketArgs } from '@/modules/global/ticket/args/ticket.args';
import { CreateMissedLogoutTicketInput } from '@/modules/global/ticket/dto/create-ticket.input';
import { UpdateMissedLogoutTicketInput } from '@/modules/global/ticket/dto/update-ticket.input';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new Ticket
  async create(dto: CreateMissedLogoutTicketInput) {
    const ticket = await this.prisma.missedLogoutTicket.create({
      data: {
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        status: dto.status as Status,
        updatedBy: dto.updatedBy,
        createdById: dto.createdById,
      },
    });

    return {
      message: 'Missed logout ticket created successfully',
      data: ticket,
    };
  }

  // Find all Tickets
  async findAll(args: MissedLogoutTicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.missedLogoutTicket.count({ where: args.where }),
      this.prisma.missedLogoutTicket.findMany({
        where: args.where,
        orderBy: { createdAt: 'desc' },
        take: perPage,
        skip,
        include: {
          createdBy: true,
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

  async findByUser(userId: string, args: MissedLogoutTicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const where = {
      ...args.where,
      createdById: userId,
    };

    const [total, data] = await Promise.all([
      this.prisma.missedLogoutTicket.count({ where }),
      this.prisma.missedLogoutTicket.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: perPage,
        skip,
        include: { createdBy: true },
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

  // Update a Ticket by id
  async update(id: string, dto: UpdateMissedLogoutTicketInput) {
    await this.prisma.missedLogoutTicket.update({
      where: { id },
      data: {
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        status: dto.status as Status,
        updatedBy: dto.updatedBy,
      },
    });

    return {
      message: 'Missed logout ticket updated successfully',
      success: true,
    };
  }

  // Delete a Ticket by id
  async delete(id: string) {
    await this.prisma.missedLogoutTicket.delete({
      where: { id },
    });

    return {
      message: 'Missed logout ticket deleted successfully',
      success: true,
    };
  }
}
