import { registerEnumType } from '@nestjs/graphql';

export enum Chats_beckerScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    message = "message"
}


registerEnumType(Chats_beckerScalarFieldEnum, { name: 'Chats_beckerScalarFieldEnum', description: undefined })
