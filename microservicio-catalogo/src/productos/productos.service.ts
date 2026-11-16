// src/productos/productos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { Producto, ProductoDocument } from './schemas/producto.schema.js';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Producto.name) private productoModel: Model<ProductoDocument>) {}

  async create(createProductoDto: Partial<Producto>): Promise<Producto> {
    const productoCreado = new this.productoModel(createProductoDto);
    return productoCreado.save();
  }

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }
}
