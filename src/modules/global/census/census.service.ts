import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Status } from '@/generated/prisma/status.enum';
import { Injectable } from '@nestjs/common';
import { CensusSummary } from './dto/census.dto';

@Injectable()
export class CensusService {
  constructor(private prisma: PrismaService) {}

  async getSummary(
    userId?: string,
  ): Promise<CensusSummary & { totalTicketsByUserId?: number }> {
    // Total Users
    const totalUsers = await this.prisma.user.count();

    // Total Tickets
    const totalTickets = await this.prisma.missedLogoutTicket.count();

    // Total Posts
    const totalPosts = await this.prisma.posts.count();

    // Total Events
    const totalEvents = await this.prisma.event.count();

    // Tickets grouped by Status
    const ticketsByStatusRaw = await this.prisma.missedLogoutTicket.groupBy({
      by: ['status'],
      _count: { status: true },
    });

    const ticketsByStatus = ticketsByStatusRaw.map((t) => ({
      status: t.status as Status,
      count: t._count.status,
    }));

    // Departments + user count
    const departments = await this.prisma.department.findMany({
      include: { profiles: true },
    });

    const departmentsWithUserCount = departments.map((dep) => ({
      departmentId: dep.id,
      departmentName: dep.name,
      departmentDescription: dep.description,
      userCount: dep.profiles.length,
    }));

    // Tickets by specific User ID
    let ticketByUserId: { status: Status; count: number }[] = [];
    let totalTicketsByUserId: number | undefined;

    if (userId) {
      const ticketsByUserRaw = await this.prisma.missedLogoutTicket.groupBy({
        by: ['status'],
        where: { createdById: userId },
        _count: { status: true },
      });

      ticketByUserId = ticketsByUserRaw.map((t) => ({
        status: t.status as Status,
        count: t._count.status,
      }));

      totalTicketsByUserId = ticketByUserId.reduce(
        (sum, t) => sum + t.count,
        0,
      );
    }

    return {
      totalUsers,
      totalTickets,
      totalPosts,
      totalEvents,
      ticketsByStatus,
      totalDepartments: departments.length,
      departmentsWithUserCount,
      ticketByUserId,
      totalTicketsByUserId,
    };
  }
}
