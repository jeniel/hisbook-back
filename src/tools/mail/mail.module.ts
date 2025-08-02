import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { MailResolver } from './mail.resolver';
import { existsSync } from 'fs';

const getTemplateDir = (): string => {
  // Try dist path first (production)
  const distPath = join(process.cwd(), 'dist', 'tools', 'mail', 'templates');
  if (existsSync(distPath)) {
    return distPath;
  }

  // Fallback to src path (development)
  return join(process.cwd(), 'src', 'tools', 'mail', 'templates');
};

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'alconnectsupport@advancedlocal.com',
          pass: 'otyxfnowcjypmwow',
        },
        logger: false, // Disable transporter logging
        debug: false, // Disable debug logging
      },
      defaults: {
        from: '"No Reply" <alconnectcupport@advancedlocal.com>',
      },
      template: {
        dir: getTemplateDir(),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
  ],
  providers: [MailService, MailResolver],
  exports: [MailService],
})
export class MailModule {}
