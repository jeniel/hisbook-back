import { registerEnumType } from '@nestjs/graphql';

export enum DistanceMetric {
    Cosine = "Cosine",
    Euclid = "Euclid",
    Dot = "Dot"
}


registerEnumType(DistanceMetric, { name: 'DistanceMetric', description: undefined })
