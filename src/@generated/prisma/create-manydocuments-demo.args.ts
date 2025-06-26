import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoCreateManyInput } from '../documents-demo/documents-demo-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydocumentsDemoArgs {

    @Field(() => [documents_demoCreateManyInput], {nullable:false})
    @Type(() => documents_demoCreateManyInput)
    data!: Array<documents_demoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
