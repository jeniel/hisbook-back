import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './tenant.resolver';
import { QdrantService } from '@/infrastructure/qdrant/qdrant.service';

@Module({
  providers: [TenantResolver, TenantService,QdrantService],
})
export class TenantModule {}
