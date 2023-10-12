# Usa una imagen base ligera de Node.js
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación de Vite para producción
RUN npm run build

# Expone el puerto 5000 (o el puerto que esté configurado en tu aplicación Vite)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "run", "build"]
