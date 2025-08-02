import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { MailService } from './mail.service';

@Resolver()
export class MailResolver {
  constructor(private readonly mailService: MailService) {}


  @Query(() => GeneralMsg)
  async sendMail() {
    return this.mailService.sendWelcomeEmail();
  }


  ///
}
