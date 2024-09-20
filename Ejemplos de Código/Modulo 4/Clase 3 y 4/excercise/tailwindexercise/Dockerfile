# Use una imagen de Node.js como base
FROM node:9

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package.json ./

# Instala las dependencias
RUN npm i

# Copia todo el código fuente al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Establece el comando para iniciar la aplicación
CMD ["npm", "start"]