import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onAddTask: (title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onAddTask,
}) => {
  const handleAddTask = () => {
    const title = prompt('请输入任务 :');
    if (title) {
      onAddTask(title);
    }
  };

  return (
    <div>
      <h2>React 特有的【容器-展示】模式</h2>
      <h2 className="mt-2 mb-2">任务列表</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mt-1">
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
                className="mr-2 mb-1"
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTask} className="mt-2">
        添加任务
      </button>
    </div>
  );
};

export default TaskList;
