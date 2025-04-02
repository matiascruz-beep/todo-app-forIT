const express = require("express");
const router = express.Router();

// Array en memoria para almacenar las tareas

let tasks = []; 

// Obtener todas las tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "El título es obligatorio" });

  const newTask = { id: tasks.length + 1, title, completed: false, createdAt: new Date() };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find((t) => t.id == id);

  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

  task.title = title !== undefined ? title : task.title;
  task.completed = completed !== undefined ? completed : task.completed;

  res.json(task);
});

// Eliminar una tarea
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id != id);
  res.json({ message: "Tarea eliminada" });
});

module.exports = router;


