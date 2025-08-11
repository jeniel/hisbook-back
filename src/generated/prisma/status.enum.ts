import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    Pending = "Pending",
    Approved = "Approved",
    Completed = "Completed"
}


registerEnumType(Status, { name: 'Status', description: undefined })
