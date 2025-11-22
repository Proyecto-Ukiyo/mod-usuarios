import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { Usuario } from './modulos/usuarios/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '194.163.170.169', // IP VPS
      port: 5433, // Puerto diferente si está en la misma máquina
      username: 'user_usuarios',
      password: 'password_usuarios',
      database: 'bd_usuarios',
      entities: [Usuario],
      synchronize: true,
      autoLoadEntities: true,
    }),
    
    // CONEXIÓN AL OTRO MICROSERVICIO (TCP Client)
    ClientsModule.register([
      {
        name: 'CLIENTES_SERVICE', 
        transport: Transport.TCP,
        options: {
          host: 'localhost', 
          port: 3000, // Puerto donde mod_clientes va a ESCUCHAR
        },
      },
    ]),
    UsuariosModule,
  ],
})
export class AppModule {}