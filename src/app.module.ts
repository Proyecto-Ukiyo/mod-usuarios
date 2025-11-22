import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    UsuariosModule,
  ],
})
export class AppModule {}