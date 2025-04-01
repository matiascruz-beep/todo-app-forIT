import { useState } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 ">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border rounded-lg"
      />
      <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-700">
        ➕ Agregar
      </button>
    </form>
  );
};

export default TaskForm;

