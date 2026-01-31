import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const PREFIX = 'api';
const DEFAULT_PORT = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(PREFIX);

  const port = process.env.API_PORT || DEFAULT_PORT;

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${PREFIX}`
  );
}

bootstrap();
