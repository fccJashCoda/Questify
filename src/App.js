import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: uuidv4(), item: 'Chocolate' },
        { id: uuidv4(), item: 'Strawberry' },
        { id: uuidv4(), item: 'Whipped Cream' },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState(
      {
        todos: [...this.state.todos, { id: uuidv4(), item: todo }],
      },
      () => console.log(this.state.todos)
    );
  }

  removeTodo(todo) {
    this.setState(
      {
        todos: this.state.todos.filter((item) => item.id !== todo.id),
      },
      () => console.log(this.state.todos)
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Questify</h1>
        <InputBox addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
