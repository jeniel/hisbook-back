import { registerEnumType } from '@nestjs/graphql';

export enum Chats_callinboundScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    message = "message"
}


registerEnumType(Chats_callinboundScalarFieldEnum, { name: 'Chats_callinboundScalarFieldEnum', description: undefined })
