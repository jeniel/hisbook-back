import { registerEnumType } from '@nestjs/graphql';

export enum Keyword_dailyScalarFieldEnum {
    id = "id",
    keyword = "keyword",
    count = "count",
    date = "date"
}


registerEnumType(Keyword_dailyScalarFieldEnum, { name: 'Keyword_dailyScalarFieldEnum', description: undefined })
