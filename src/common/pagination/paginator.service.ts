// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';

// @Injectable()
// export class PaginationService {
//   constructor(private readonly prisma: PrismaService) {}

//   async paginate(model: any, args: any, perPage: number = 2) {
//     const page = args.page || 1;
//     const skip = page > 0 ? perPage * (page - 1) : 0;

//     const [total, data] = await Promise.all([
//       this.prisma[model].count({ where: args.where }),
//       this.prisma[model].findMany({
//         where: args.where,
//         take: perPage,
//         skip,
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
