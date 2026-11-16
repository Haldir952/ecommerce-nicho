// src/productos/dto/create-producto.dto.ts
export class CreateProductoDto {
  readonly nombre: string;
  readonly descripcion: string;
  readonly precio: number;
  readonly imagen: string;
}