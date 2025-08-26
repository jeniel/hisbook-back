import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

// Dto and Args
import { MissedLogoutTicketArgs } from '@/modules/global/ticket/args/ticket.args';
import { CreateTicketInput } from '@/modules/global/ticket/dto/create-ticket.input';
import { UpdateTicketInput } from '@/modules/global/ticket/dto/update-ticket.input';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new Ticket
  async create(dto: CreateTicketInput) {
    const ticket = await this.prisma.missedLogoutTicket.create({
      data: {
        subject: dto.subject,
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        status: dto.status as Status,
        updatedBy: dto.updatedBy,
        createdById: dto.createdById,
        remarks: dto.remarks,
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
          createdBy: {
            include: { profile: true },
          },
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

  // Find a Ticket by ID
  async findById(id: string) {
    const ticket = await this.prisma.missedLogoutTicket.findUnique({
      where: { id },
      include: {
        createdBy: {
          include: { profile: true },
        },
        auditLogs: {
          include: {
            user: {
              include: { profile: true },
            },
          },
        },
      },
    });

    if (!ticket) {
      throw new Error(`Missed logout ticket with id ${id} not found`);
    }

    return ticket;
  }

  // Find Tickets by User
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
        include: {
          createdBy: {
            include: { profile: true },
          },
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

  // Find Tickets a User has worked on (via Audit Logs)
  async findWorkedTickets(userId: string, args: MissedLogoutTicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    // Get logs where user is involved
    const [total, logs] = await Promise.all([
      this.prisma.auditLog.count({
        where: { userId },
      }),
      this.prisma.auditLog.findMany({
        where: { userId },
        take: perPage,
        skip,
        include: {
          ticket: {
            include: {
              auditLogs: {
                include: {
                  user: true, // who performed the action
                },
              },
            },
          },
        },
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data: logs,
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
  async update(id: string, dto: UpdateTicketInput, userId: string) {
    await this.prisma.missedLogoutTicket.update({
      where: { id },
      data: {
        subject: dto.subject,
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        status: dto.status as Status,
        updatedBy: dto.updatedBy,
        remarks: dto.remarks,
      },
    });

    // Create audit log entry
    await this.prisma.auditLog.create({
      data: {
        action: `Ticket updated: ${dto.status ?? 'No status change'}`, // customize message
        updatedBy: dto.updatedBy, // or currentUser.username
        userId: userId, // who did the action
        ticketId: id,
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
