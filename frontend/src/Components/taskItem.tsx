import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void; // Ahora recibe el nuevo título
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-300 mb-3">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border p-1 w-full mr-2"
          />
        ) : (
          <h3 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-500" : "text-black"}`}>
            {task.title}
          </h3>
        )}

        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-3 py-1 rounded-md ${task.completed ? "bg-green-500 text-black" : "bg-gray-200 text-black"}`}
        >
          {task.completed ? "Completada ✅" : "Pendiente 🔘"}
        </button>
      </div>
      <p className="text-sm text-gray-500">📅 {new Date(task.createdAt).toLocaleDateString()}</p>

      {isEditing ? (
        <button
          onClick={() => {
            onUpdate(task.id, editedTitle);
            setIsEditing(false);
          }}
          className="mt-2 bg-green-500 text-green-500 px-3 py-1 rounded-md hover:bg-green-700"
        >
          Guardar ✅
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mt-2 bg-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-700"
        >
          Editar ✏️
        </button>
      )}

      <button
        onClick={() => onDelete(task.id)}
        className="mt-2 bg-red-500 text-red-500 px-3 py-1 rounded-md hover:bg-red-700 ml-2"
      >
        🗑 Eliminar
      </button>
    </div>
  );
};

export default TaskItem;
