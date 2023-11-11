import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
    If whitelist is set to true, unknown properties will be removed before validation, 
    which may result in missing validation errors for the properties that are not defined in your DTO class
  */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, 
    }),
  );

  await app.listen(3000);
}
bootstrap();
