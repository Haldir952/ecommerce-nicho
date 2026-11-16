import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesModule } from './ordenes/ordenes.module.js';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'password123',
      database: 'ordenes_db',
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo, crea las tablas automáticamente
    }),
    OrdenesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}