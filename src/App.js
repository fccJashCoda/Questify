import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Chocolate',
      description: '',
      reward: '',
      started: new Date(),
    },
    {
      id: uuidv4(),
      title: 'Strawberry',
      description: '',
      reward: '',
      started: new Date(),
    },
    {
      id: uuidv4(),
      title: 'Whipped Cream',
      description: '',
      reward: '',
      started: new Date(),
    },
  ]);

  // todo prototype
  const quest = {
    id: uuidv4(),
    title: 'string',
    description: 'string',
    reward: 'string',
    timeframe: new Date(),
    started: new Date(),
  };

  const addTodo = (todo) => {
    console.log('todo', todo);
    setTodos([...todos, { id: uuidv4(), ...todo, started: new Date() }]);
  };

  const editTodo = (todo) => {
    console.log(todo);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="App">
      <h1>Questify</h1>
      <Form
        fields={{ title: 'Noodle', description: '', reward: '' }}
        action={addTodo}
      />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
