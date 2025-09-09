import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

process.env.TZ = 'Asia/Manila';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: ['http://localhost:4173', 'https://acebook.acemcbohol.ph/'], // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
    //allowedHeaders: ['Content-Type', 'X-CSRF-Token'], // Allow CSRF token header
  });

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true, // Strip properties that don't have decorators
      // transform: true, // Automatically transform payloads to DTO instances
      // forbidNonWhitelisted: true, // Throw error if non-whitelisted properties are present
      disableErrorMessages: false, // Keep error messages for debugging
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
