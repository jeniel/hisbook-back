import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImagesCountAggregate } from './images-count-aggregate.output';
import { ImagesMinAggregate } from './images-min-aggregate.output';
import { ImagesMaxAggregate } from './images-max-aggregate.output';

@ObjectType()
export class ImagesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => ImagesCountAggregate, {nullable:true})
    _count?: ImagesCountAggregate;

    @Field(() => ImagesMinAggregate, {nullable:true})
    _min?: ImagesMinAggregate;

    @Field(() => ImagesMaxAggregate, {nullable:true})
    _max?: ImagesMaxAggregate;
}
