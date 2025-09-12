import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

// Dto and Args
import { TicketArgs } from '@/modules/global/ticket/args/ticket.args';
import { CreateTicketInput } from '@/modules/global/ticket/dto/create-ticket.input';
import { UpdateTicketInput } from '@/modules/global/ticket/dto/update-ticket.input';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new Ticket
  async create(dto: CreateTicketInput) {
    const ticket = await this.prisma.ticket.create({
      data: {
        subject: dto.subject,
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        message: dto.message,
        status: dto.status as Status,
        remarks: dto.remarks,
        updatedBy: dto.updatedBy,
        createdById: dto.createdById,
        departmentId: dto.departmentId,
      },
    });

    return {
      message: 'Ticket created successfully',
      data: ticket,
    };
  }

  // Find all Tickets
  async findAll(args: TicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.ticket.count({ where: args.where }),
      this.prisma.ticket.findMany({
        where: args.where,
        orderBy: { createdAt: 'desc' },
        take: perPage,
        skip,
        include: {
          createdBy: {
            include: { profile: true },
          },
          department: true, // 👈 include department info
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
    const ticket = await this.prisma.ticket.findUnique({
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
  async findByUser(userId: string, args: TicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const where = {
      ...args.where,
      createdById: userId,
    };

    const [total, data] = await Promise.all([
      this.prisma.ticket.count({ where }),
      this.prisma.ticket.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: perPage,
        skip,
        include: {
          createdBy: {
            include: { profile: true },
          },
          department: true,
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

  // Find Ticket by Department
  async findByDepartment(departmentId: string, args: TicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const where = {
      ...args.where,
      departmentId, // 👈 filter tickets by department
    };

    const [total, data] = await Promise.all([
      this.prisma.ticket.count({ where }),
      this.prisma.ticket.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: perPage,
        skip,
        include: {
          createdBy: {
            include: { profile: true },
          },
          department: true, // 👈 include department info
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
  async findTicketsWorkedByUser(userId: string, args: TicketArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    // Count unique tickets where user has audit logs
    const [total, tickets] = await Promise.all([
      this.prisma.ticket.count({
        where: {
          auditLogs: {
            some: { userId },
          },
        },
      }),
      this.prisma.ticket.findMany({
        where: {
          auditLogs: {
            some: { userId },
          },
        },
        take: perPage,
        skip,
        orderBy: { createdAt: 'desc' },
        include: {
          createdBy: {
            include: {
              profile: true, // 👈 make sure this is included
            },
          },
          auditLogs: {
            include: {
              user: true, // include user info for each action
            },
          },
        },
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data: tickets,
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
  a;

  // Update a Ticket by id
  async update(id: string, dto: UpdateTicketInput, userId: string) {
    await this.prisma.ticket.update({
      where: { id },
      data: {
        subject: dto.subject,
        missedAt: dto.missedAt,
        floor: dto.floor,
        screenshot: dto.screenshot,
        status: dto.status as Status,
        updatedBy: dto.updatedBy,
        remarks: dto.remarks,
        departmentId: dto.departmentId,
      },
    });

    // Create audit log entry
    await this.prisma.auditLog.create({
      data: {
        action: `Ticket updated: ${dto.status ?? 'No status change'}`, // customize message
        remarks: dto.remarks,
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
    await this.prisma.ticket.delete({
      where: { id },
    });

    return {
      message: 'Missed logout ticket deleted successfully',
      success: true,
    };
  }
}
