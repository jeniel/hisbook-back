import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistanceMetric } from '../prisma/distance-metric.enum';
import { keyword_dailyUncheckedCreateNestedManyWithoutTenantInput } from '../keyword-daily/keyword-daily-unchecked-create-nested-many-without-tenant.input';
import { keywordsUncheckedCreateNestedManyWithoutTenantInput } from '../keywords/keywords-unchecked-create-nested-many-without-tenant.input';
import { UserUncheckedCreateNestedManyWithoutTenantInput } from '../user/user-unchecked-create-nested-many-without-tenant.input';

@InputType()
export class TenantUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApprove?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    nanoid?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    chatTableName?: string;

    @Field(() => String, {nullable:true})
    documentTableName?: string;

    @Field(() => String, {nullable:true})
    collectionName?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => DistanceMetric, {nullable:true})
    distance?: `${DistanceMetric}`;

    @Field(() => keyword_dailyUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    keywordDailies?: keyword_dailyUncheckedCreateNestedManyWithoutTenantInput;

    @Field(() => keywordsUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    keywords?: keywordsUncheckedCreateNestedManyWithoutTenantInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutTenantInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutTenantInput;
}
