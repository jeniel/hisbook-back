import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoWhereUniqueInput } from '../documents-demo/documents-demo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedocumentsDemoArgs {

    @Field(() => documents_demoWhereUniqueInput, {nullable:false})
    @Type(() => documents_demoWhereUniqueInput)
    where!: documents_demoWhereUniqueInput;
}
