import { registerAs } from '@nestjs/config';
import { NestjsConfig } from '../interfaces/config.interface';

export const isProd = process.env.NODE_ENV === 'prod';

export const nestjsConfig = registerAs(
  'nestjs',
  (): NestjsConfig => ({
    port: parseInt(process.env.PORT || '3000', 10) || 3000,
    isProd,
  }),
);
