// TaskList.js

import React from 'react';
import TaskItem from './TaskItem';
import { useTaskListContext } from './TaskListContext';
import './index.css'; // Импорт файла стилей

function TaskList() {
  const { tasks } = useTaskListContext();

  return (
    
      <div className="TaskList">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      
    </div>
  );
}

export default TaskList;
