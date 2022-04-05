import { NestFactory } from '@nestjs/core';
import { OgmaService } from '@ogma/nestjs-module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  const logger = app.get<OgmaService>(OgmaService);
  app.useLogger(logger);
  await app.listen(3000);
}
bootstrap();
