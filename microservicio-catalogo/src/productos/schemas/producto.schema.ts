// src/productos/schemas/producto.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductoDocument = HydratedDocument<Producto>;

@Schema()
export class Producto {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  imagen: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);