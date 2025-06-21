import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    CLIENT = "CLIENT",
    SUPER_ADMIN = "SUPER_ADMIN"
}


registerEnumType(Role, { name: 'Role', description: undefined })
