import { registerEnumType } from '@nestjs/graphql';

export enum N8n_chat_historiesScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    message = "message"
}


registerEnumType(N8n_chat_historiesScalarFieldEnum, { name: 'N8n_chat_historiesScalarFieldEnum', description: undefined })
