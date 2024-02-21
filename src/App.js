import React from 'react';
import TaskListContextProvider from './TaskListContext';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function App() {
  return (
    <div className="App">
      <center><h2>Список задач</h2></center>
      <TaskListContextProvider>
        <AddTaskForm />
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
}

export default App;
