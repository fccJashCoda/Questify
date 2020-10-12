import React from 'react';

function Todo(props) {
  const { todo } = props;

  console.log(todo);

  function handleClick(item) {
    console.log('Hi');
    console.log(item);
  }

  return (
    <div>
      {todo.item}
      <button onClick={() => handleClick(todo)}>click</button>
    </div>
  );
}

export default React.memo(Todo);
