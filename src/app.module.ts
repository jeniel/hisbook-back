import { AuthModule } from '@/core/auth/auth.module';
import { PrismaModule } from '@/core/database/prisma/prisma.module';
import { GlobalModule } from '@/modules/global/global.module';
import { ToolsModule } from '@/modules/tools/tools.module';
import { SequentialIdModule } from '@/shared/common/generator/sequential-id.module';
import { AccessTokenGuard } from '@/shared/common/guards/accessToken.guard';
import { RolesGuard } from '@/shared/common/guards/roles.guard';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
      sortSchema: true,
      playground: false,
      context: ({ req, res }) => ({ req, res }),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    PrismaModule,
    SequentialIdModule,
    GlobalModule,
    ToolsModule,
  ],
  providers: [
    JwtService,
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
