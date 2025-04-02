Todo App ForIT

Este es un proyecto de backend para una aplicación de gestión de tareas, utilizando Node.js, Express y una API REST.

🚀 Instalación y Ejecución Local

1️⃣ Clonar el repositorio

git clone https://github.com/matiascruz-beep/todo-app-forIT.git
cd todo-app-forIT

El proyecto tiene dos carpetas principales:

backend/ → Contiene el servidor en Node.js con Express.

frontend/ → Contiene la interfaz de usuario (React, vite, tailwind.).

2️⃣ Instalar dependencias

Backend:

cd backend
npm install

Frontend:

cd ../frontend
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la carpeta backend/ y añade:

PORT=8080

4️⃣ Ejecutar la aplicación

Ejecutar el backend

cd backend
npm run dev

El servidor se ejecutará en http://localhost:8080/.

Ejecutar el frontend

cd ../frontend
npm run dev

El frontend se ejecutará en http://localhost:5173/ (o el puerto configurado).

5️⃣ Probar la API

Puedes utilizar herramientas como Postman o cURL para probar los endpoints. Ejemplo de prueba con curl:

curl -X POST http://localhost:8080/api/tasks -H "Content-Type: application/json" -d '{"title": "Mi primera tarea"}'

📌 Rutas de la API

GET /api/tasks → Obtener todas las tareas

POST /api/tasks → Crear una nueva tarea

PUT /api/tasks/:id → Actualizar una tarea

DELETE /api/tasks/:id → Eliminar una tarea

🛠 Tecnologías utilizadas

Node.js (backend)

Express.js

Nodemon

Dotenv

CORS

React.js - (frontend)

👨‍💻 Contribuir

Si deseas contribuir, ¡siéntete libre de hacer un fork y enviar un pull request!

Esto es Educambio, un proyecto que pretende ser parte de la solución. ¡Muchas gracias! 🎯

