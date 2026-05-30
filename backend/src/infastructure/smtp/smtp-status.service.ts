import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common";

@Injectable()
class SmtpStatusService implements OnApplicationBootstrap{
  private readonly logger = new Logger(SmtpStatusService.name)

  constructor()
}
export {SmtpStatusService}