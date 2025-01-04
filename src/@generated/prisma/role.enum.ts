import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    BILLING = "BILLING",
    CASHIER = "CASHIER",
    ACCOUNTING = "ACCOUNTING",
    RADIOLOGIST = "RADIOLOGIST"
}


registerEnumType(Role, { name: 'Role', description: undefined })
