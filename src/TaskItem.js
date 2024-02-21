import React from 'react';
import { useTaskListContext } from './TaskListContext';

function TaskItem({ task }) {
  const { removeTask, toggleTaskCompletion } = useTaskListContext();

  return (
    <div className={`TaskItem ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Отменить' : 'Выполнено'}
        </button>
        <button onClick={() => removeTask(task.id)}>Удалить</button>
      </div>
    </div>
  );
}

export default TaskItem;
