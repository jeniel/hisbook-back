import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCaseOrThrowArgs {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;
}
