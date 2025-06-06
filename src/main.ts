import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
process.env.TZ = 'Asia/Manila';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: ['http://localhost:3000', '*'], // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
    //allowedHeaders: ['Content-Type', 'X-CSRF-Token'], // Allow CSRF token header
  });

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
