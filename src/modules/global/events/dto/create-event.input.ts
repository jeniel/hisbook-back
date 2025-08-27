import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field()
  location: string;

  @Field({ nullable: true })
  detailsUrl?: string;
}
