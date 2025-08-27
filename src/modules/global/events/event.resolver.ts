import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Event } from '@/generated/event/event.model';
import { EventList } from '@/modules/global/events/entities/event.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { EventService } from './event.service';

// Input, Args and Entity
import { EventArgs } from '@/modules/global/events/args/event.args';
import { UpdateEventInput } from '@/modules/global/events/dto/update-event.input';
import { CreateEventInput } from './dto/create-event.input';

// Import Roles
import { Role } from '@/generated/prisma/role.enum';
import { Roles } from '@/shared/common/decorator/roles.decorator';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  // Create
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  createEvent(@Args('payload') payload: CreateEventInput) {
    return this.eventService.create(payload);
  }

  // Find All
  @Query(() => EventList)
  async findAllEvents(@Args() args: EventArgs) {
    return await this.eventService.findAll(args);
  }

  // Update
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  updateEvent(
    @Args('id') id: string,
    @Args('payload') payload: UpdateEventInput,
  ) {
    return this.eventService.update(id, payload);
  }

  // Delete
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  deleteEvent(@Args('id') id: string) {
    return this.eventService.delete(id);
  }
}
