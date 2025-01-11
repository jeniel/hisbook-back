import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseCreateInput } from './case-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCaseArgs {

    @Field(() => CaseCreateInput, {nullable:true})
    @Type(() => CaseCreateInput)
    data?: CaseCreateInput;
}
