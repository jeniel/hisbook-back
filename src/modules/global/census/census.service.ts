import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Status } from '@/generated/prisma/status.enum';
import { Injectable } from '@nestjs/common';
import { CensusSummary } from './dto/census.dto';

@Injectable()
export class CensusService {
  constructor(private prisma: PrismaService) {}

  async getSummary(): Promise<CensusSummary> {
    // Total Users
    const totalUsers = await this.prisma.user.count();

    // Total Tickets
    const totalTickets = await this.prisma.missedLogoutTicket.count();

    // Total Posts
    const totalPosts = await this.prisma.posts.count();

    // Tickets grouped by Status
    const ticketsByStatusRaw = await this.prisma.missedLogoutTicket.groupBy({
      by: ['status'],
      _count: { status: true },
    });

    const ticketsByStatus = ticketsByStatusRaw.map((t) => ({
      status: t.status as Status, // ✅ cast to Prisma enum
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

    return {
      totalUsers,
      totalTickets,
      ticketsByStatus,
      totalPosts,
      totalDepartments: departments.length,
      departmentsWithUserCount,
    };
  }
}
