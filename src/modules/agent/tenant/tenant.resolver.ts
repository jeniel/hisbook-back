import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { CreateTenant } from './dto/create';
import { Tenant } from '@/generated/@generated/tenant/tenant.model';

@Resolver()
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Mutation(() => GeneralMsg)
  createTenant(@Args('createTenant') payload: CreateTenant) {
    return this.tenantService.createTenant(payload);
  }

  @Query(() => [Tenant])
  findAllTenants() {
    return this.tenantService.findAllTenants();
  }

  @Query(() => Tenant)
  findTenantById(@Args('tenantId') id: string) {
    return this.tenantService.findTenantById(id);
  }

  //end
}
