import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CaseCountAggregate } from './case-count-aggregate.output';
import { CaseAvgAggregate } from './case-avg-aggregate.output';
import { CaseSumAggregate } from './case-sum-aggregate.output';
import { CaseMinAggregate } from './case-min-aggregate.output';
import { CaseMaxAggregate } from './case-max-aggregate.output';

@ObjectType()
export class CaseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    cid?: string;

    @Field(() => String, {nullable:true})
    caseNo?: string;

    @Field(() => String, {nullable:true})
    priceGroup?: string;

    @Field(() => Int, {nullable:true})
    ageOnReg?: number;

    @Field(() => Boolean, {nullable:true})
    caseStatus?: boolean;

    @Field(() => String, {nullable:true})
    maritalStatus?: string;

    @Field(() => String, {nullable:true})
    patientId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => CaseCountAggregate, {nullable:true})
    _count?: CaseCountAggregate;

    @Field(() => CaseAvgAggregate, {nullable:true})
    _avg?: CaseAvgAggregate;

    @Field(() => CaseSumAggregate, {nullable:true})
    _sum?: CaseSumAggregate;

    @Field(() => CaseMinAggregate, {nullable:true})
    _min?: CaseMinAggregate;

    @Field(() => CaseMaxAggregate, {nullable:true})
    _max?: CaseMaxAggregate;
}
