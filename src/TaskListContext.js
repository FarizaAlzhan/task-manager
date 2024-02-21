import React, { createContext, useState, useEffect, useContext } from 'react';

const TaskListContext = createContext();

export const useTaskListContext = () => {
  return useContext(TaskListContext);
};

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, toggleTaskCompletion }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
