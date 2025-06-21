import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedocumentsOrThrowArgs {

    @Field(() => documentsWhereUniqueInput, {nullable:false})
    @Type(() => documentsWhereUniqueInput)
    where!: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;
}
