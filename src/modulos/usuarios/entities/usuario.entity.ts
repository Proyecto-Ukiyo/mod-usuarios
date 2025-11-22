import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Empleado } from '../../empleados/entities/empleado.entity'; 

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ name: 'password' })
  password: string;
  
  // Referencia al ID del cliente en la BD_Clientes (sin relación TypeORM)
  @Column({ name: 'cliente_id', type: 'uuid', nullable: true })
  clienteId: string; 

  // Ejemplo de relación interna con Perfiles
  // @OneToMany(() => Perfil, (perfil) => perfil.usuario)
  // perfiles: Perfil[]; 
}