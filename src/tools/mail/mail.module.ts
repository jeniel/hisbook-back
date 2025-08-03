import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST', 'smtp.gmail.com'),
          port: parseInt(config.get('MAIL_PORT', '587')),
          secure: config.get('MAIL_SECURE', 'false') === 'true', // Use STARTTLS by default
          auth: {
            user: config.get('MAIL_USER', 'alconnectsupport@advancedlocal.com'),
            pass: config.get('MAIL_PASS', 'otyxfnowcjypmwow'),
          },
          tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
          },
          connectionTimeout: 60000, // 60 seconds
          greetingTimeout: 30000, // 30 seconds
          socketTimeout: 60000, // 60 seconds
          logger: config.get('NODE_ENV') === 'development', // Enable logging in development
          debug: config.get('NODE_ENV') === 'development', // Enable debug in development
        },
        defaults: {
          from: config.get('MAIL_FROM', '"No Reply" <alconnectsupport@advancedlocal.com>'),
        },
        template: {
          dir: getTemplateDir(),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService, MailResolver],
  exports: [MailService],
})
export class MailModule {}
