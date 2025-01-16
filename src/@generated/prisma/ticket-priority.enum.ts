import { registerEnumType } from '@nestjs/graphql';

export enum TicketPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}


registerEnumType(TicketPriority, { name: 'TicketPriority', description: undefined })
