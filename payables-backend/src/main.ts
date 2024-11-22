import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb' }));
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Payables')
    .setDescription('The Payables API description')
    .setVersion('1.0')
    .addTag('payables')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
