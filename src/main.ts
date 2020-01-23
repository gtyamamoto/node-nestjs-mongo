import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
  .setTitle('Goomer Lista Rango')
  .setDescription('Criar uma API RESTful capaz de gerenciar os restaurantes e os produtos do seu cardápio.')
  .setVersion('1.0')
  .addTag('Rangos')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
