# 📱 Mobile Eccommerce

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.3-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-6.2.6-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-9.21.0-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)

---

## Índice

- [📥 Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
- [🚀 Scripts del Proyecto](#-scripts-del-proyecto)
- [🔧 Variables de Entorno](#-variables-de-entorno)
- [🐳 Uso de Docker Compose](#-uso-de-docker-compose)

---

## 📥 Instalación y Puesta en Marcha

Sigue estos pasos básicos para arrancar el proyecto de forma local:

1. **Clonar el repositorio**  
   Clona el repositorio en tu máquina local y accede al directorio del proyecto:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar las dependencias**  
   Una vez dentro del directorio del proyecto, instala las dependencias utilizando npm:

   ```bash
    npm install
   ```

3. **Arrancar el proyecto en modo desarollo**  
   Levanta la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en http://localhost:3000

---

## 🚀 Scripts del Proyecto

El proyecto incluye varios scripts para facilitar su desarrollo, construcción, pruebas y revisión de código:

- **`npm run dev`**: Inicia la aplicación en modo desarrollo.

- **`npm run build`**: Compila la aplicación para producción.

- **`npm run test`**: Ejecuta los tests del proyecto.

- **`npm run lint`**: Revisa el código conforme a las reglas definidas en ESLint.

Utiliza estos comandos según la tarea que necesites ejecutar.

---

## 🔧 Variables de Entorno

El proyecto utiliza una variable de entorno donde se guarda el dominio para la conexión con la API:

1. Copia el archivo de ejemplo:

   ```bash
   cp .env.example .env
   ```

2. Edita el archivo **`.env`**:

   Asegúrate de asignar el valor correcto a **`VITE_API_DOMAIN`**:

   ```bash
    VITE_API_DOMAIN=API_URL
   ```

---

## 🐳 Uso de Docker Compose

Si deseas usar Docker para gestionar el entorno del proyecto, sigue estos pasos:

1. **Verificar requisitos previos**

   - Tener Docker instalado en tu máquina.
   - Asegúrate de que el puerto (por defecto el 3000) esté disponible.

2. **Levantar el contenedor**

   Una vez configurado, ejecuta:

   ```bash
    docker-compose up --build
   ```
