// // src/pagination/pagination.service.ts
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '@/core/database/prisma/prisma.service';
// import { Prisma, PrismaClient } from '@prisma/client';

// export interface PaginationArgs {
//   page?: number;
//   perPage?: number;
//   where?: Prisma.TicketTransactionWhereInput;
// }

// export interface PaginationMeta {
//   total: number;
//   lastPage: number;
//   currentPage: number;
//   perPage: number;
//   prev: number | null;
//   next: number | null;
// }

// export interface PaginationResult<T> {
//   data: T[];
//   meta: PaginationMeta;
// }

// @Injectable()
// export class PaginationService {
//   constructor(private readonly prisma: PrismaService) {}

//   async paginate<T>(
//     model: keyof PrismaClient,
//     args: PaginationArgs,
//     include?: Prisma.TicketTransactionInclude,
//   ): Promise<PaginationResult<T>> {
//     const page = args.page || 1;
//     const perPage = args.perPage || 10;
//     const skip = page > 0 ? perPage * (page - 1) : 0;

//     const [total, data] = await Promise.all([
//       this.prisma[model].count({ where: args.where }),
//       this.prisma[model].findMany({
//         where: args.where,
//         take: perPage,
//         skip,
//         include,
//       }),
//     ]);

//     const lastPage = Math.ceil(total / perPage);

//     return {
//       data,
//       meta: {
//         total,
//         lastPage,
//         currentPage: page,
//         perPage,
//         prev: page > 1 ? page - 1 : null,
//         next: page < lastPage ? page + 1 : null,
//       },
//     };
//   }
// }
