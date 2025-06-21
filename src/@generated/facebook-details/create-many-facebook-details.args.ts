import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsCreateManyInput } from './facebook-details-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacebookDetailsArgs {

    @Field(() => [FacebookDetailsCreateManyInput], {nullable:false})
    @Type(() => FacebookDetailsCreateManyInput)
    data!: Array<FacebookDetailsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
