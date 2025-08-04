import { registerEnumType } from '@nestjs/graphql';

export enum FacebookPageScalarFieldEnum {
    id = "id",
    fbId = "fbId",
    name = "name",
    about = "about",
    accessToken = "accessToken",
    category = "category",
    fanCount = "fanCount",
    followersCount = "followersCount",
    overallStarRating = "overallStarRating",
    link = "link",
    website = "website",
    username = "username",
    engagementCount = "engagementCount",
    engagementMessage = "engagementMessage",
    imageUrl = "imageUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FacebookPageScalarFieldEnum, { name: 'FacebookPageScalarFieldEnum', description: undefined })
