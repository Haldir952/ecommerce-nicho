// src/ordenes/entities/orden.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Orden {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productoId: string; // Guardaremos el ID del producto que viene de Mongo

  @Column()
  cantidad: number;

  @Column('numeric')
  precioTotal: number;

  @Column('numeric')
  impuesto: number;

  @CreateDateColumn()
  fecha: Date;
}