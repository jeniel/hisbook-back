import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateEventInput } from './create-event.input';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
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
