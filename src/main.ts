import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//bootstrap is just name of function
//you can change whatever you want
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
