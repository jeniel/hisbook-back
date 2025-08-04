import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { MailService } from '@/modules/tools/mail/mail.service';

@Resolver()
export class MailResolver {
  constructor(private readonly mailService: MailService) {}

  @Query(() => GeneralMsg)
  async sendMail() {
    return this.mailService.sendWelcomeEmail();
  }

  ///
}
