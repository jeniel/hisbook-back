import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerCreateManyInput } from '../documents-becker/documents-becker-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydocumentsBeckerArgs {

    @Field(() => [documents_beckerCreateManyInput], {nullable:false})
    @Type(() => documents_beckerCreateManyInput)
    data!: Array<documents_beckerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
