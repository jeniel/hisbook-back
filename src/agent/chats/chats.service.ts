import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindAllChatArgs } from './dto/find-all-chat.args';

@Injectable()
export class ChatsService {
  constructor(private readonly prisma: PrismaService) {}

  // Method to find chat by session ID with pagination
  async findChatBySession(args: FindAllChatArgs) {
    const { tenantId, page, limit, sessionId } = args;

    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    const tableName = Prisma.raw(tenant.chatTableName);
    const offset = (page - 1) * limit;

    // Get total count for pagination metadata
    const totalCountResult = await this.prisma.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*) as count FROM ${tableName}
        WHERE session_id = ${sessionId}
      `;
    const totalCount = Number(totalCountResult[0].count);

    // Get paginated results
    const contents = await this.prisma.$queryRaw<
      { id: bigint; session_id: string; message: any }[]
    >`
        SELECT id,session_id,message FROM ${tableName}
        WHERE session_id = ${sessionId}
        ORDER BY id asc
        LIMIT ${limit} OFFSET ${offset}
      `;

    const formattedContents = contents.map((item) => ({
      id: item.id.toString(),
      session_id: item.session_id,
      message:
        typeof item.message === 'string'
          ? JSON.parse(item.message)
          : item.message,
    }));


    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return {
      data: formattedContents,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        limit,
        hasNextPage,
        hasPrevPage,
      },
    };
  }

  //findAllChat method to retrieve all chats with pagination

  //end
}
