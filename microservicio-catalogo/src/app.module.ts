import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module.js';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/catalogo'),
    ProductosModule,
  ],
  providers: [],
})
export class AppModule {}
