import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsCreateManyInput } from './documents-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydocumentsArgs {

    @Field(() => [documentsCreateManyInput], {nullable:false})
    @Type(() => documentsCreateManyInput)
    data!: Array<documentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
