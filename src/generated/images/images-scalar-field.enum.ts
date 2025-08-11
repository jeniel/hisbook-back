import { registerEnumType } from '@nestjs/graphql';

export enum ImagesScalarFieldEnum {
    id = "id",
    url = "url",
    postId = "postId"
}


registerEnumType(ImagesScalarFieldEnum, { name: 'ImagesScalarFieldEnum', description: undefined })
