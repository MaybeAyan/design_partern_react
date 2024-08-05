import React, { useState } from 'react';
import TaskList from './TaskList';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskListContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: '学习 React', completed: false },
    { id: 2, title: '学习 TypeScript', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <TaskList tasks={tasks} onToggleTask={toggleTask} onAddTask={addTask} />
  );
};

export default TaskListContainer;
