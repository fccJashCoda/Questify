import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 2em;
  margin-bottom: 0.5em;
`;

function Todo(props) {
  const [toggle, setToggle] = useState(false);
  const { todo, removeTodo, editTodo } = props;

  return (
    <Card>
      {todo.title} <button onClick={() => removeTodo(todo)}>click</button>{' '}
      <button onClick={() => editTodo(todo)}>edit</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4>EASY</h4>}
    </Card>
  );
}

export default React.memo(Todo);
