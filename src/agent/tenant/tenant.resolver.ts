import { Mutation, Resolver } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver()
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}


  
  @Mutation(() => GeneralMsg)
  createTenant() {
    return this.tenantService.createTenant();
  }



  //end
}
