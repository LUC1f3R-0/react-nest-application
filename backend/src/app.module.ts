import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, dataConfig, smtpConfig } from './config/app.config';
import validationSchema from './config/validation.config';
import { SmtpModule } from './infastructure/smtp/smtp.module';
import { DatabaseModule } from './infastructure/database/database.module';
import { CorsConfig } from './common/cors/cors.config';
import { CommonModule } from './common/common.module';
import { HealthModule } from './health/indicators/health.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, smtpConfig, dataConfig],
      validationSchema: validationSchema,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      path: 'graphql',
      useGlobalPrefix: true,
    }),
    CommonModule,
    SmtpModule,
    DatabaseModule,
    AuthModule,
    HealthModule,
  ],
  providers: [CorsConfig],
})
export class AppModule {}
