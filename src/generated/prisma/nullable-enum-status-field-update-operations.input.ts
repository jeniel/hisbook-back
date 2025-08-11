import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';

@InputType()
export class NullableEnumStatusFieldUpdateOperationsInput {

    @Field(() => Status, {nullable:true})
    set?: `${Status}`;
}
