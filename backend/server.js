require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //para procesar JSON en las peticiones
const tasksRoutes = require("./routes/tasks.routes"); // Importamos las rutas


// Ruta de prueba para verificar que el servidor responde correctamente
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente.');
});


app.use("/api/tasks", tasksRoutes); // Usamos las rutas de tareas


//Iniciar servidor 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



