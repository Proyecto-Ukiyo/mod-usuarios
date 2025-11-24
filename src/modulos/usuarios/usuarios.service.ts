import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll() {
    return this.usuariosRepository.find();
  }

  async findOne(id: string) {
    // return this.usuariosRepository.findOne({ where: { id } });
    return id;
  }

  async getPerfilCompleto(idInterno: string) {
    const usuario = await this.usuariosRepository.findOne({ where: { id: idInterno } });
    return usuario;
  }
}