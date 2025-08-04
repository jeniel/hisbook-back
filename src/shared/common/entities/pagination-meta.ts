import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Meta {
  @Field()
  total: number;

  @Field()
  lastPage: number;

  @Field()
  currentPage: number;

  @Field()
  perPage: number;

  @Field({ nullable: true })
  prev?: number | null;

  @Field({ nullable: true })
  next?: number | null;
}
