import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

interface EmailResponse {
  success: boolean;
  messageId: string;
}

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  async sendFlagBill() {
    try {
      const result = await this.mailerService.sendMail({
        to: 'joemark0008@gmail.com',
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: 'Flagged Transaction - Sample Email',
        template: 'flagged-transaction',
        context: {
          transactionId: `TXN-${Date.now()}`,
          amount: '$1,234.56',
          date: new Date().toLocaleDateString(),
          status: 'Flagged for Review',
          currentYear: new Date().getFullYear(),
        },
      });

      return {
        message: 'Done',
      };
    } catch (error) {
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }

  async sendWelcomeEmail() {
    try {
      const result = await this.mailerService.sendMail({
        to: 'joemark0008@gmail.com',
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: 'Welcome to AL Connect Platform',
        template: 'welcome',
        context: {
          userName: 'User',
          platformName: 'AL Connect Platform',
          currentYear: new Date().getFullYear(),
          gettingStartedSteps: [
            'Complete your profile setup',
            'Explore our dashboard features',
            'Connect your integrations',
            'Start building with our AI agents',
          ],
        },
      });

      return {
        message: 'Done',
      };
    } catch (error) {
      throw new Error(`Welcome email sending failed: ${error.message}`);
    }
  }

  async sendSampleEmail(to: string): Promise<any> {
    try {
      const result = await this.mailerService.sendMail({
        to: to,
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: 'Sample Email from AL Agent Platform',
        template: 'sample-email',
        context: {
          platformName: 'AL Agent Platform',
          sentAt: new Date().toLocaleString(),
          serviceName: 'AL Agent Platform Mail Service',
          status: 'Test Email',
          currentYear: new Date().getFullYear(),
        },
      });

      return { success: true, messageId: result.messageId };
    } catch (error) {
      throw new Error(`Sample email sending failed: ${error.message}`);
    }
  }

  async sendSimpleTestEmail(
    to: string = 'joemark0008@gmail.com',
  ): Promise<any> {
    try {
      const result = await this.mailerService.sendMail({
        to: to,
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: 'Simple Test Email (No Template)',
        html: '<h1>Test Email</h1><p>This is a simple test email without templates.</p>',
        text: 'Test Email - This is a simple test email without templates.',
      });

      return { success: true, messageId: result.messageId };
    } catch (error) {
      throw new Error(`Simple email sending failed: ${error.message}`);
    }
  }

  async sendInvitationEmail(
    to: string,
    invitationLink: string,
    role: string,
    tenantName?: string,
  ): Promise<any> {
    try {
      const result = await this.mailerService.sendMail({
        to: to,
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: `You\'re Invited to Join ${tenantName || 'AL Connect Platform'}`,
        template: './invitation',
        context: {
          invitationLink,
          role,
          platformName: 'AL Connect Platform',
          tenantName: tenantName || 'AL Connect Platform',
          currentYear: new Date().getFullYear(),
          expirationHours: 24,
        },
      });

      return { success: true, messageId: result.messageId };
    } catch (error) {
      throw new Error(`Invitation email sending failed: ${error.message}`);
    }
  }

  async sendWelcomeEmailToUser(
    to: string,
    userName: string,
    tenantName?: string,
  ): Promise<any> {
    try {
      const result = await this.mailerService.sendMail({
        to: to,
        from: '"AL Support Team" <notifications.email@gmail.com>',
        subject: `Welcome to ${tenantName || 'AL Connect Platform'}`,
        template: './welcome',
        context: {
          userName,
          platformName: 'AL Connect Platform',
          tenantName: tenantName || 'AL Connect Platform',
          currentYear: new Date().getFullYear(),
          gettingStartedSteps: [
            'Complete your profile setup',
            'Explore our dashboard features',
            'Connect your integrations',
            'Start building with our AI agents',
          ],
        },
      });

      return { success: true, messageId: result.messageId };
    } catch (error) {
      throw new Error(`Welcome email sending failed: ${error.message}`);
    }
  }
}
