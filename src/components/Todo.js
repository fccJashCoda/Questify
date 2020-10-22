import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 2em;
  margin-bottom: 0.5em;
`;

function Todo(props) {
  const [toggle, setToggle] = useState(false);
  const { todo, removeTodo, editTodo } = props;
  const { title, description, reward } = todo;

  const middleAgent = (stuff) => {
    setToggle(!toggle);
    editTodo(todo, stuff);
  };
  console.log(`${title} with id ${todo.id} rerenders`);
  return (
    <Card>
      {title} <button onClick={() => removeTodo(todo)}>click</button>{' '}
      <button onClick={() => setToggle(!toggle)}>Edit</button>
      {toggle && (
        <Form fields={{ title, description, reward }} action={middleAgent} />
      )}
    </Card>
  );
}

export default React.memo(Todo);
