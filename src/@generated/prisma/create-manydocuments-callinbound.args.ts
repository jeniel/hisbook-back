import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundCreateManyInput } from '../documents-callinbound/documents-callinbound-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydocumentsCallinboundArgs {

    @Field(() => [documents_callinboundCreateManyInput], {nullable:false})
    @Type(() => documents_callinboundCreateManyInput)
    data!: Array<documents_callinboundCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
