import { registerEnumType } from '@nestjs/graphql';

export enum TicketSubCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(TicketSubCategoryScalarFieldEnum, { name: 'TicketSubCategoryScalarFieldEnum', description: undefined })
