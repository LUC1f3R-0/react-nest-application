import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig, smtpConfig } from './config/app.config';
import validationSchema from './config/validation.config';
import { SmtpModule } from './infastructure/smtp/smtp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, smtpConfig],
      validationSchema: validationSchema,
    }),
    SmtpModule,
  ],
})
export class AppModule {}
