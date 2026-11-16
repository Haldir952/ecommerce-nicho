import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesModule } from './ordenes/ordenes.module.js';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_NAME || 'ordenes_db',
    autoLoadEntities: true,
    synchronize: true,
}),
    OrdenesModule,
  ],
  providers: [],
})
export class AppModule {}