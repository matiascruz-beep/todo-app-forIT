import { useState, useEffect } from "react";
import TaskList from "./Components/taskList";
import TaskForm from "./Components/taskForm";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

const API_URL = "http://localhost:3000/api/tasks";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);


  //Cargar tareas desde el backend al montar el componente
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      }
      )
      .catch((error) => {
        console.error("Error al obtener tareas:", error);
      }
      );
  }, []);

//Agregar tarea al backend
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
      })
      .catch((error) => {
        console.error("Error al agregar tarea:", error);
      }
      );
  };

  //Actualizar tarea en el backend
  const updateTask = (id: number, newTitle: string) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }), // Enviar un objeto con el nuevo título
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.map((task) => (task.id === id ? data : task))); // Actualizar la tarea en el estado
      })
      .catch((error) => {
        console.error("Error al actualizar tarea:", error);
      });
  };

  //Eliminar tarea del backend
  const deleteTask = (id: number) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((err) => console.error("Error al eliminar tarea:", err));
  };

  //Marcar tarea completada en el backend
  const toggleComplete = (id: number) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...taskToUpdate, completed: !taskToUpdate.completed }),
    })
      .then((res) => res.json())
      .then((updatedTask) =>
        setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
      )
      .catch((err) => console.error("Error al actualizar tarea:", err));
  };

  //Renderizar la interfaz de usuario
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">📌 Lista de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} onUpdate={updateTask} />
    </div>
  );
};

export default App;


