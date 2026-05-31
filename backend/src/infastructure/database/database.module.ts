import { Module } from '@nestjs/common';
import { PrismaService } from './database.service';
import { DatabaseStatusService } from './database-status.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [PrismaService, DatabaseStatusService],
  exports: [PrismaService],
})
export class DatabaseModule {}
