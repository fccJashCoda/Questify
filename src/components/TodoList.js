import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  const { todos } = props;
  console.log(todos);
  return (
    <div>
      <h2>TodoList</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
