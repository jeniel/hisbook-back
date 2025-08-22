import { registerEnumType } from '@nestjs/graphql';

export enum PostsScalarFieldEnum {
    id = "id",
    content = "content",
    datePosted = "datePosted",
    images = "images",
    userId = "userId"
}


registerEnumType(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined })
