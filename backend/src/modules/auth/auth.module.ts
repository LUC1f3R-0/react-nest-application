import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../infastructure/database/database.module';
import { AuthRepository } from './auth.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [DatabaseModule],
  providers: [AuthResolver, AuthService, AuthRepository],
  exports: [AuthService],
})
class AuthModule {}

export { AuthModule };
