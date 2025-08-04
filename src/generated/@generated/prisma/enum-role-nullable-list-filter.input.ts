import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from './role.enum';

@InputType()
export class EnumRoleNullableListFilter {

    @Field(() => [Role], {nullable:true})
    equals?: Array<`${Role}`>;

    @Field(() => Role, {nullable:true})
    has?: `${Role}`;

    @Field(() => [Role], {nullable:true})
    hasEvery?: Array<`${Role}`>;

    @Field(() => [Role], {nullable:true})
    hasSome?: Array<`${Role}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
