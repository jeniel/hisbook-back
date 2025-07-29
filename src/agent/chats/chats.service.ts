import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindAllChatArgs } from './dto/find-all-chat.args';
import { FindAllChatWithoutSessionArgs } from './dto/find-all-chat-without-session.args';
import { FindSessionChatArgs } from './dto/find-session-chat.args';

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

  async findAllChat(args: FindAllChatWithoutSessionArgs) {
    const { tenantId, page, limit } = args;

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
      `;
    const totalCount = Number(totalCountResult[0].count);

    // Get paginated results
    const contents = await this.prisma.$queryRaw<
      { id: bigint; session_id: string; message: any; created_at: any }[]
    >`
        SELECT id,session_id,message,created_at FROM ${tableName}
        ORDER BY id ASC
        LIMIT ${limit} OFFSET ${offset}
      `;

    const formattedContents = contents.map((item) => ({
      id: item.id.toString(),
      session_id: item.session_id,
      created_at: item.created_at,
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

  async findSessionChat(args: FindSessionChatArgs) {
    const { tenantId, page, limit } = args;

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

    // Get total count of distinct sessions for pagination metadata
    const totalCountResult = await this.prisma.$queryRaw<[{ count: bigint }]>`
      SELECT COUNT(DISTINCT session_id) as count FROM ${tableName}
    `;
    const totalCount = Number(totalCountResult[0].count);

    // Get distinct session IDs with their latest created_at timestamp with pagination
    const sessions = await this.prisma.$queryRaw<
      { session_id: string; latest_created_at: Date }[]
    >`
      SELECT DISTINCT session_id, MAX(created_at) as latest_created_at 
      FROM ${tableName}
      GROUP BY session_id
      ORDER BY latest_created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const data = sessions.map((session) => ({
      session_id: session.session_id,
      latest_activity: session.latest_created_at,
    }));

    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return {
      data,
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

  //end
}
