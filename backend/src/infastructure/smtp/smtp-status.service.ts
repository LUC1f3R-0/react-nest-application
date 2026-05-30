import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { SmtpService } from './smtp.service';

@Injectable()
class SmtpStatusService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SmtpStatusService.name);

  constructor(private readonly smtpService: SmtpService) {}

  async onApplicationBootstrap(): Promise<void> {
    try {
      await this.smtpService.verify();
      this.logger.log('SMTP connection SUCCESSFULL');
    } catch (err) {
      const messaage = err instanceof Error ? err.message : String(err);
      this.logger.error(`SMTP connection FAILED: ${messaage}`);
    }
  }
}
export { SmtpStatusService };
