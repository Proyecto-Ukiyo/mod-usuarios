import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    // Inyectamos el cliente TCP (app.module.ts)
    @Inject('CLIENTES_SERVICE') private readonly clientesClient: ClientProxy,
  ) {}

  async getPerfilCompleto(idInterno: string) {
    const usuario = await this.usuariosRepository.findOne({ where: { id: idInterno } });

    if (!usuario || !usuario.clienteId) {
        // Manejar error si no existe en BD_USUARIOS
        return null;
    }

    // Pide los datos al otro Microservicio
    const datosCliente = await this.clientesClient.send(
      { cmd: 'obtener_datos_cliente' }, // El mismo patrón que definimos en mod-clientes
      usuario.clienteId, // El ID LÓGICO que enviamos como payload
    ).toPromise(); 

    // Retorna un objeto consolidado
    return { ...usuario, datosCliente };
  }
}