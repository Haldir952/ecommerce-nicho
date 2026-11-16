// src/productos/productos.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service.js';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { Producto } from './schemas/producto.schema.js';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }
}