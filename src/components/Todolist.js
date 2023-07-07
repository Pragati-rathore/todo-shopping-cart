import React, { useState } from 'react';
import "../Style/TodoList.css"

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='todo-box'>
      <h1 className='heading'>To-Do List</h1>
      <div  className='input-todo'>
      
      <input
      className='input'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>


      <ul>
        {tasks.map((task, index) => (
          <li
           className='text'
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span className='max'>
           {task.text}
            </span>
            
            <input
            className='checkbox'
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p className='para'>Total Tasks: {tasks.length}</p>
      <p className='para'>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoList;
