# Usamos una imagen ligera de Node.js
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias e instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y compilamos Nest.js
COPY . .
RUN npm run build

# Ejecutamos la versión compilada de producción
CMD ["node", "dist/main"]