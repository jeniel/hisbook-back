import { registerEnumType } from '@nestjs/graphql';

export enum KeywordsScalarFieldEnum {
    id = "id",
    keyword = "keyword",
    count = "count"
}


registerEnumType(KeywordsScalarFieldEnum, { name: 'KeywordsScalarFieldEnum', description: undefined })
