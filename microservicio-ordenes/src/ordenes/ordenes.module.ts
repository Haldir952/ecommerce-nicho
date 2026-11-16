// src/ordenes/ordenes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenesController } from './ordenes.controller.js';
import { OrdenesService } from './ordenes.service.js';
import { Orden } from './entities/orden.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Orden])],
  controllers: [OrdenesController],
  providers: [OrdenesService]
})
export class OrdenesModule {}