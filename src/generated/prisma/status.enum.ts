import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    Pending = "Pending",
    Approved = "Approved",
    Completed = "Completed",
    OnHold = "OnHold",
    InProgress = "InProgress"
}


registerEnumType(Status, { name: 'Status', description: undefined })
