import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    title = "title",
    startDate = "startDate",
    endDate = "endDate",
    location = "location",
    detailsUrl = "detailsUrl",
    createdAt = "createdAt",
    deletedAt = "deletedAt"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
