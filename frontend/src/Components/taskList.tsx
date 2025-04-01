import TaskItem from "./taskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void; 

}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleComplete,onUpdate }) => {
  
  return (
    <div className="w-full max-w-lg mx-auto">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas aún...</p>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onToggleComplete={onToggleComplete} 
            onUpdate={onUpdate} // Placeholder for update function
          />
        ))
      )}
    </div>
  );
};

export default TaskList;


