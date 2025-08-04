import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { keywords } from '@/generated/@generated/keywords/keywords.model';

@ObjectType()
export class Reports {
  @Field(() => [keywords])
  @Type(() => keywords)
  keywords?: [keywords];

  @Field(() => Int, { nullable: true })
  totalKeyWord?: number | null;
}
