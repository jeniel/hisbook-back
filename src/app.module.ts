import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { SequentialIdModule } from './common/generator/sequential-id.module';
import { AccessTokenGuard } from './common/guards/accessToken.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { DepartmentModule } from './global/department/department.module';
import { UserModule } from './global/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { TicketingModule } from './ticketing/ticketing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      sortSchema: true,
      playground: false,
      context: ({ req, res }) => ({ req, res }),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    PrismaModule,
    TicketingModule,
    DepartmentModule,
    UserModule,
    SequentialIdModule,
  ],
  controllers: [],
  providers: [
    JwtService,

    { provide: APP_GUARD, useClass: AccessTokenGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
