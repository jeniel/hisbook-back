import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    hashedPassword = "hashedPassword",
    hashedRefreshToken = "hashedRefreshToken",
    role = "role",
    departmentId = "departmentId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
