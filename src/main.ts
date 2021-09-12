import { NestFactory } from '@nestjs/core';

import * as packageInfo from '../package.json';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = Number.parseInt(process.env.PORT, 10) || 3000;
  const host = process.env.HOST || '0.0.0.0';

  const url = `http://${host}:${port}`;
  // Documentation
  SwaggerModule.setup(
    'docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Inova - +Brasil Hackathon 2021')
        .setDescription(packageInfo.description)
        .setVersion(packageInfo.version)
        .addServer('https://inova-hackathon.herokuapp.com', 'Prod')
        .addServer('https://inova-hackathon.herokuapp.com', 'Dev')
        .addServer(url, 'Local')
        .build(),
    ),
  );

  await app.listen(port, host);
}

bootstrap();
