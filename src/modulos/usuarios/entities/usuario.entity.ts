import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Perfil } from '../../perfiles/entities/perfiles.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  // Relación 1:1 con Perfil
  @OneToOne(() => Perfil, perfil => perfil.usuario, { cascade: true, eager: true })
  @JoinColumn() // crea la FK en la tabla usuarios
  perfil: Perfil;
}
