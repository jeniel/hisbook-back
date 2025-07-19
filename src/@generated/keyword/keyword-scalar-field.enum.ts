import { registerEnumType } from '@nestjs/graphql';

export enum KeywordScalarFieldEnum {
    id = "id",
    keyword = "keyword",
    count = "count",
    tenantId = "tenantId"
}


registerEnumType(KeywordScalarFieldEnum, { name: 'KeywordScalarFieldEnum', description: undefined })
