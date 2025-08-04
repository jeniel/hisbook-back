import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyScalarWhereInput } from './keyword-daily-scalar-where.input';
import { Type } from 'class-transformer';
import { keyword_dailyUpdateManyMutationInput } from './keyword-daily-update-many-mutation.input';

@InputType()
export class keyword_dailyUpdateManyWithWhereWithoutTenantInput {

    @Field(() => keyword_dailyScalarWhereInput, {nullable:false})
    @Type(() => keyword_dailyScalarWhereInput)
    where!: keyword_dailyScalarWhereInput;

    @Field(() => keyword_dailyUpdateManyMutationInput, {nullable:false})
    @Type(() => keyword_dailyUpdateManyMutationInput)
    data!: keyword_dailyUpdateManyMutationInput;
}
