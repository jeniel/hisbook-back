import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPagePostScalarWhereInput } from './facebook-page-post-scalar-where.input';
import { Type } from 'class-transformer';
import { FacebookPagePostUpdateManyMutationInput } from './facebook-page-post-update-many-mutation.input';

@InputType()
export class FacebookPagePostUpdateManyWithWhereWithoutPageInput {

    @Field(() => FacebookPagePostScalarWhereInput, {nullable:false})
    @Type(() => FacebookPagePostScalarWhereInput)
    where!: FacebookPagePostScalarWhereInput;

    @Field(() => FacebookPagePostUpdateManyMutationInput, {nullable:false})
    @Type(() => FacebookPagePostUpdateManyMutationInput)
    data!: FacebookPagePostUpdateManyMutationInput;
}
