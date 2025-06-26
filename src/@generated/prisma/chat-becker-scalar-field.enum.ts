import { registerEnumType } from '@nestjs/graphql';

export enum Chat_beckerScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    message = "message"
}


registerEnumType(Chat_beckerScalarFieldEnum, { name: 'Chat_beckerScalarFieldEnum', description: undefined })
