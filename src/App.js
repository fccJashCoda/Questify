import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), item: 'Chocolate' },
    { id: uuidv4(), item: 'Strawberry' },
    { id: uuidv4(), item: 'Whipped Cream' },
  ]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos([...todos, { id: uuidv4(), item: todo }]);
  };

  const removeTodo = () => {
    // this.setState(
    //       {
    //         todos: [...this.state.todos, { id: uuidv4(), item: todo }],
    //       },
    //       () => console.log(this.state.todos)
    //     );
  };

  return (
    <div className="App">
      <h1>Questify</h1>
      <InputBox addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
