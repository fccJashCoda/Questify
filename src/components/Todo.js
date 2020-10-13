import React from 'react';

function Todo(props) {
  const { todo, removeTodo } = props;

  function handleClick(todo) {
    removeTodo(todo);
  }

  return (
    <div>
      {todo.item} <button onClick={() => handleClick(todo)}>click</button>
    </div>
  );
}

export default React.memo(Todo);
