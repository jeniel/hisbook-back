import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { Type } from 'class-transformer';
import { documentsCreateInput } from './documents-create.input';
import { documentsUpdateInput } from './documents-update.input';

@ArgsType()
export class UpsertOnedocumentsArgs {

    @Field(() => documentsWhereUniqueInput, {nullable:false})
    @Type(() => documentsWhereUniqueInput)
    where!: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;

    @Field(() => documentsCreateInput, {nullable:false})
    @Type(() => documentsCreateInput)
    create!: documentsCreateInput;

    @Field(() => documentsUpdateInput, {nullable:false})
    @Type(() => documentsUpdateInput)
    update!: documentsUpdateInput;
}
