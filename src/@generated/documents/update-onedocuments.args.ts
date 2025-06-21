import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsUpdateInput } from './documents-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';

@ArgsType()
export class UpdateOnedocumentsArgs {

    @Field(() => documentsUpdateInput, {nullable:false})
    @Type(() => documentsUpdateInput)
    data!: documentsUpdateInput;

    @Field(() => documentsWhereUniqueInput, {nullable:false})
    @Type(() => documentsWhereUniqueInput)
    where!: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;
}
