// src/ordenes/ordenes.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdenesService } from './ordenes.service.js';

@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Post()
  async create(@Body() body: { productoId: string, cantidad: number, precioUnitario: number }) {
    // Pasamos los datos al servicio que ejecutará el Stored Procedure
    return this.ordenesService.crearConSP(body.productoId, body.cantidad, body.precioUnitario);
  }

  @Get()
  async findAll() {
    return this.ordenesService.findAll();
  }
}