import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 2em;
  margin-bottom: 0.5em;
`;

function Todo(props) {
  const { todo, removeTodo } = props;

  function handleClick(todo) {
    removeTodo(todo);
  }

  return (
    <Card>
      {todo.title} <button onClick={() => handleClick(todo)}>click</button>
    </Card>
  );
}

export default React.memo(Todo);
