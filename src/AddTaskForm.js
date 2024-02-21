// AddTaskForm.js

import React, { useState } from 'react';
import { useTaskListContext } from './TaskListContext';
import './index.css'; // Импорт файла стилей

function AddTaskForm() {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useTaskListContext();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText.trim());
      setTaskText('');
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="AddTaskForm">
        <input
          type="text"
          value={taskText}
          onChange={handleChange}
          placeholder="Введите новую задачу"
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
