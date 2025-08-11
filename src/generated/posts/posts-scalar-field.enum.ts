import { registerEnumType } from '@nestjs/graphql';

export enum PostsScalarFieldEnum {
    id = "id",
    content = "content",
    userId = "userId"
}


registerEnumType(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined })
