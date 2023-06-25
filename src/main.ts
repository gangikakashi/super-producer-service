import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isProd } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: isProd ? false : ['error', 'debug', 'warn', 'log', 'verbose'],
  });
  const configService = app.get(ConfigService);
  const port = configService.get('nestjs.port');
  const logger = new Logger();
  logger.log(`App is listening on port: ${port}`);
  await app.listen(port);
}
bootstrap();
