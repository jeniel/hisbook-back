import { Event } from '@/generated/event/event.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EventList {
  @Field(() => [Event])
  data: Event;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
