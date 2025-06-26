import { registerEnumType } from '@nestjs/graphql';

export enum Chats_demoScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    message = "message"
}


registerEnumType(Chats_demoScalarFieldEnum, { name: 'Chats_demoScalarFieldEnum', description: undefined })
