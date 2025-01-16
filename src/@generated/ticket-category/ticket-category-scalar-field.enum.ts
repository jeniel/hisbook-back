import { registerEnumType } from '@nestjs/graphql';

export enum TicketCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(TicketCategoryScalarFieldEnum, { name: 'TicketCategoryScalarFieldEnum', description: undefined })
