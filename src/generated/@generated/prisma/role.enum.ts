import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    CLIENT = "CLIENT",
    SUPER_ADMIN = "SUPER_ADMIN",
    CLIENT_USER = "CLIENT_USER",
    CLIENT_ADMIN = "CLIENT_ADMIN",
    AL_USER = "AL_USER"
}


registerEnumType(Role, { name: 'Role', description: undefined })
