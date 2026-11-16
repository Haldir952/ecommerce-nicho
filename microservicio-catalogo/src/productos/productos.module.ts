// src/productos/productos.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosController } from './productos.controller.js';
import { ProductosService } from './productos.service.js';
import { Producto, ProductoSchema } from './schemas/producto.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}