import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { Usuario } from './modulos/usuarios/entities/usuario.entity';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Usuario],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuariosModule,
    SeedModule,
  ],
})
export class AppModule {}