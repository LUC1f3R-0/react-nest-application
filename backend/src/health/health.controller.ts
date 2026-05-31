import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { SkipHeaderValidation } from 'src/common/decorators/skip-header-validation.decorator';

@SkipHeaderValidation()
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return this.healthService.check();
  }
}
