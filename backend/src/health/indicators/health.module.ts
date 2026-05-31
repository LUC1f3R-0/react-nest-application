import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { SmtpModule } from 'src/infastructure/smtp/smtp.module';
import { DatabaseModule } from 'src/infastructure/database/database.module';
import { HealthController } from '../health.controller';
import { HealthService } from '../health.service';
import { DatabaseHealthIndicator } from './database.health.indicator';
import { SmtpHealthIndicator } from './smtp.health.indicator';

@Module({
  imports: [TerminusModule, SmtpModule, DatabaseModule],
  controllers: [HealthController],
  providers: [HealthService, DatabaseHealthIndicator, SmtpHealthIndicator],
})
export class HealthModule {}
