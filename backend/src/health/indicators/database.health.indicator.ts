import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';

import { PrismaService } from 'src/infastructure/database/database.service';

@Injectable()
export class DatabaseHealthIndicator extends HealthIndicator {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;

      return this.getStatus(key, true);
    } catch (error) {
      throw new HealthCheckError(
        'Database check failed',
        this.getStatus(key, false, {
          error: (error as Error).message,
        }),
      );
    }
  }
}
