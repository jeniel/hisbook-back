import { Injectable, Logger } from '@nestjs/common';
import { CreateFbInput } from './dto/create-fb.input';
import { UpdateFbInput } from './dto/update-fb.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bizSdk from 'facebook-nodejs-business-sdk';

@Injectable()
export class FbService {
  private readonly logger = new Logger(FbService.name);
  private accessToken = process.env.FB_ACCESS_TOKEN;
  private businessId = process.env.FB_BUSINESS_ID;
  private readonly User = bizSdk.User;
  private Business = bizSdk.Business;
  private AdAccount = bizSdk.AdAccount;
  private Campaign = bizSdk.Campaign;
  constructor(private readonly prisma: PrismaService) {
    bizSdk.FacebookAdsApi.init(this.accessToken);
  }

  async syncToGraphApi() {
    const user = new this.User('me');

    const pages = await user.getAccounts([
      'id',
      'name',
      'about',
      'access_token',
      'category',
      'fan_count',
      'followers_count ',
      'overall_star_rating',
      'link',
      'website',
      'username',
      'engagement',
      'picture',
    ]);

    const formattedData = pages.map((page) => ({
      fbId: page.id,
      name: page.name,
      username: page.username ?? null,
      about: page.about ?? null,
      accessToken: page.access_token ?? null,
      category: page.category ?? null,
      link: page.link ?? null,
      fanCount: page.fan_count ?? null,
      followersCount: page.followers_count ?? null,
      website: page.website ?? null,
      imageUrl: page.picture?.data?.url ?? null,
    }));

    await this.prisma.$transaction(
      formattedData.map((page) =>
        this.prisma.facebookPage.upsert({
          where: { id: page.fbId },
          update: page,
          create: page,
        }),
      ),
    );
    return { message: 'Sync completed successfully.' };
  }

  //end
}
