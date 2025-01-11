import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignWhereInput } from './vital-sign-where.input';
import { Type } from 'class-transformer';
import { VitalSignOrderByWithRelationInput } from './vital-sign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VitalSignScalarFieldEnum } from './vital-sign-scalar-field.enum';

@ArgsType()
export class FindManyVitalSignArgs {

    @Field(() => VitalSignWhereInput, {nullable:true})
    @Type(() => VitalSignWhereInput)
    where?: VitalSignWhereInput;

    @Field(() => [VitalSignOrderByWithRelationInput], {nullable:true})
    @Type(() => VitalSignOrderByWithRelationInput)
    orderBy?: Array<VitalSignOrderByWithRelationInput>;

    @Field(() => VitalSignWhereUniqueInput, {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    cursor?: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VitalSignScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VitalSignScalarFieldEnum>;
}
