import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateTenant } from './dto/create';
import { QdrantService } from 'src/qdrant/qdrant.service';

@Injectable()
export class TenantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly qdrantService: QdrantService,
  ) {}

  async createTenant(payload: CreateTenant) {
    //Steps:
    // 1. Create a new tenant in the Tenant table
    // 2. Create a new table document_tenant-slug in the database this will be refrence to n8n vector database to look up
    // 3. Create a new table chat_tenant-slug in the database this will be refrence to n8n chat database to look up
    // 4. Create new n8n workflow for the tenant and set to active using n8n API

    const tenantData = await this.prisma.tenant.create({
      data: payload,
    });

    // Use raw SQL identifier safely with Prisma.$raw
    const documentTableName = Prisma.raw(tenantData.documentTableName);
    const chatTableName = Prisma.raw(tenantData.chatTableName);

    // Run Qdrant collection creation and database table creation in parallel
    await Promise.all([
      // Create Qdrant collection
      this.qdrantService.createCollection(tenantData.collectionName, {
        size: tenantData.size,
        distance: tenantData.distance || 'Cosine',
      }),

      // Create chat table using Prisma transaction
      this.prisma.$executeRaw`
        CREATE TABLE IF NOT EXISTS ${chatTableName} (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        message JSONB,
        created_at TIMESTAMP DEFAULT NOW()
        )
      `,
    ]);

    return {
      message: `Tenant ${tenantData.slug} created successfully with document and chat tables`,
    };
  }

  async findAllTenants() {
    const tenants = await this.prisma.tenant.findMany();
    return tenants;
  }

  async findTenantById(id: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: id,
      },
    });
    return tenant;
  }

  //end
}
