// src/ordenes/ordenes.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Orden } from './entities/orden.entity.js';


@Injectable()
export class OrdenesService implements OnModuleInit {
  constructor(
    @InjectRepository(Orden) private ordenRepository: Repository<Orden>,
    private dataSource: DataSource // Permite ejecutar SQL crudo
  ) {}

  async onModuleInit() {
    // Esto crea el Stored Procedure en Postgres automáticamente si no existe.
    // Calcula el total y el 19% de impuesto antes de insertar.
    await this.dataSource.query(`
      CREATE OR REPLACE PROCEDURE sp_crear_orden(
          p_producto_id VARCHAR,
          p_cantidad INT,
          p_precio_unitario NUMERIC
      )
      LANGUAGE plpgsql
      AS $$
      DECLARE
          v_total NUMERIC;
          v_impuesto NUMERIC;
      BEGIN
          v_total := p_cantidad * p_precio_unitario;
          v_impuesto := v_total * 0.19; 

          INSERT INTO orden ("productoId", cantidad, "precioTotal", impuesto)
          VALUES (p_producto_id, p_cantidad, v_total, v_impuesto);
      END;
      $$;
    `);
  }

  // Función que el Controlador llamará para ejecutar el Stored Procedure
  async crearConSP(productoId: string, cantidad: number, precioUnitario: number) {
    await this.dataSource.query(`CALL sp_crear_orden($1, $2, $3)`, [productoId, cantidad, precioUnitario]);
    return { mensaje: 'Orden procesada y guardada exitosamente usando SP' };
  }

  async findAll(): Promise<Orden[]> {
    return this.ordenRepository.find();
  }
}