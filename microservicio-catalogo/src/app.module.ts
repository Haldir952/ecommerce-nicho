import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/catalogo_db'),
    ProductosModule,
  ],
  providers: [],
})
export class AppModule {}
