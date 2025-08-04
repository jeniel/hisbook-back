import { Injectable } from '@nestjs/common';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { keywordsWhereInput } from '@/generated/@generated/keywords/keywords-where.input';
import { GetAllKeyWorkByTenantArgs } from './args/args';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllKeyWorkByTenant(args: GetAllKeyWorkByTenantArgs) {
    const keywords = await this.prisma.keywords.findMany({
      where: { tenantId: args.where?.tenantId },
      take: 10, // Select top 10
      orderBy: { count: 'desc' }, // Order by count descending
    });

    const totalKeyWord = await this.prisma.keywords.count({
      where: { tenantId: args.where?.tenantId },
    });

    return {
      keywords: keywords,
      totalKeyWord: totalKeyWord,
    };
  }

  // findAll() {
  //   return `This action returns all reports`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} report`;
  // }

  // update(id: number, updateReportInput: UpdateReportInput) {
  //   return `This action updates a #${id} report`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} report`;
  // }
}
