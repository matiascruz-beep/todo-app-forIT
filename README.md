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


SCREENSHOTS DE LA APP FUNCIONANDO:

Creo una tarea: 

![1](https://github.com/user-attachments/assets/689996d4-3568-4268-bc66-a9461e92cf81)


Postman con solicitud GET muestra la tarea creada:

![image](https://github.com/user-attachments/assets/69edc008-4f9b-4166-954a-b3aace84e7ec)



Marco la tarea como completada:

![2](https://github.com/user-attachments/assets/84c0a6fe-5e69-4ad9-aaf4-68749dff115a)


Postman indica la tarea completada satisfactoriamente:

![image](https://github.com/user-attachments/assets/ff2e6aa5-8fef-43a6-994a-b4a72372baae)


Edito la tarea:

![3](https://github.com/user-attachments/assets/60e759ac-6869-4529-840b-583e082437aa)


Guardo la tarea exitosamente:

![4](https://github.com/user-attachments/assets/4e9d6fbf-5cb0-4d95-bf6e-5561fbeea27e)








