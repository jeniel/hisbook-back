import { registerEnumType } from '@nestjs/graphql';

export enum KeywordsScalarFieldEnum {
    id = "id",
    keyword = "keyword",
    count = "count",
    tenantId = "tenantId"
}


registerEnumType(KeywordsScalarFieldEnum, { name: 'KeywordsScalarFieldEnum', description: undefined })
