import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
process.env.TZ = 'Asia/Manila';
import * as csurf from 'csurf';
import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: ['http://localhost:3000', 'https://helpdesk.acemcbohol.dev'], // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
    //allowedHeaders: ['Content-Type', 'X-CSRF-Token'], // Allow CSRF token header
  });

  // Enable CSRF protection and store the token in a secure cookie
  // app.use(
  //   csurf({
  //     cookie: {
  //       httpOnly: true, // Secure, not accessible via JavaScript
  //       secure: true, // Only over HTTPS
  //       sameSite: 'strict', // Prevent CSRF
  //       path: '/',
  //     },
  //   }),
  // );

  // app.use(csurf({ cookie: { sameSite: true } }));

  // app.use((req: Request, res: any, next: any) => {
  //   const csrfToken = req.headers['his-token'];
  //   console.log('CSRF Token:', csrfToken);
  //   res.cookie('XSRF-TOKEN', csrfToken);
  //   res.locals.csrfToken = csrfToken;
  //   next();
  // });

  // app.use((req: any, res: any, next: any) => {

  //   res.cookie("XSRF-TOKEN", "xaSKc33-oZD4o1aw4c8Pct-d")
  //   res.locals.csrfToken = "xaSKc33-oZD4o1aw4c8Pct-d"
  //   next()
  // })

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
