import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  findAll() {
    return [
      { id: 1, nombre: 'Belén', rol: 'admin' },
      { id: 2, nombre: 'Carlos', rol: 'editor' },
    ];
  }
}
