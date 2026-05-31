import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CorsConfig } from './common/cors/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsConfig = app.get(CorsConfig);
  const configService = app.get(ConfigService);

  app.enableCors(corsConfig.options);
  app.setGlobalPrefix('api/v1');
  app.enableShutdownHooks();
  await app.listen(configService.get<number>('app.port') ?? 3000);
}
bootstrap();
