import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crea la aplicación como un servidor HTTP (para pruebas)
  const app = await NestFactory.create(AppModule);
  await app.listen(3001); // Puerto distinto
  console.log('Microservicio de usuarios escuchando en el puerto 3001');
}
bootstrap();