import { MessagesModule } from './messages/messages.module';
import { NestFactory } from '@nestjs/core';
import { ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
