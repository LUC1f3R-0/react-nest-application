import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, dataConfig, smtpConfig } from './config/app.config';
import validationSchema from './config/validation.config';
import { SmtpModule } from './infastructure/smtp/smtp.module';
import { DatabaseModule } from './infastructure/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, smtpConfig, dataConfig],
      validationSchema: validationSchema,
    }),
    SmtpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
