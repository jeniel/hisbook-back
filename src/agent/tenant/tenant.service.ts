import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async createTenant(): Promise<{ message: string }> {
    //Steps:
    // 1. Create a new tenant in the Tenant table
    // 2. Create a new table document_tenant-slug in the database this will be refrence to n8n vector database to look up
    // 3. Create a new table chat_tenant-slug in the database this will be refrence to n8n chat database to look up
    // 4. Create new n8n workflow for the tenant and set to active using n8n API

    const tenantData = await this.prisma.tenant.create({
      data: {
        name: 'Demo-tenant',
        slug: 'demo2',
        description: 'This is a new tenant',
      },
    });

    // Use raw SQL identifier safely with Prisma.$raw
    const documentTableName = Prisma.raw(`documents_${tenantData.slug}`);
    const chatTableName = Prisma.raw(`chats_${tenantData.slug}`);

    await this.prisma.$transaction([
      this.prisma.$executeRaw`
          CREATE TABLE IF NOT EXISTS ${documentTableName} (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            content TEXT,
            metadata JSONB,
            embedding vector(1536)
          )
        `,
        
      this.prisma.$executeRaw`
          CREATE TABLE IF NOT EXISTS ${chatTableName} (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            session_id VARCHAR(255) NOT NULL,
            message JSONB
          )
        `
    ]);

    return { message: `Tenant ${tenantData.slug} created successfully with document and chat tables` };
  }
}
