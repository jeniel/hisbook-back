import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

// Import DTO and ARGS
import { EventArgs } from '@/modules/global/events/args/event.args';
import { UpdateEventInput } from '@/modules/global/events/dto/update-event.input';
import { CreateEventInput } from './dto/create-event.input';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  // Create Event
  async create(dto: CreateEventInput) {
    const event = await this.prisma.event.create({
      data: {
        title: dto.title,
        startDate: dto.startDate,
        endDate: dto.endDate,
        location: dto.location,
        detailsUrl: dto.detailsUrl,
      },
    });

    return {
      message: 'Event created successfully',
      data: event,
    };
  }

  // Find all Departments (with pagination)
  async findAll(args: EventArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.event.count({ where: args.where }),
      this.prisma.event.findMany({
        where: args.where,
        orderBy: { createdAt: 'desc' },
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

  // Update Event
  async update(id: string, data: UpdateEventInput) {
    await this.prisma.event.update({
      where: { id },
      data,
    });

    return {
      message: 'Event updated successfully',
      success: true,
    };
  }

  // Delete Department
  async delete(id: string) {
    await this.prisma.event.delete({
      where: { id },
    });

    return {
      message: 'Event deleted successfully',
      success: true,
    };
  }
}
