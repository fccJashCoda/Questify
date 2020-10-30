import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 2em;
  margin-bottom: 0.5em;
`;

function Quest(props) {
  const [toggle, setToggle] = useState(false);
  const { quest, removeQuest, editQuest } = props;
  const { id, title, description, reward, started } = quest;

  const middleAgent = (stuff) => {
    setToggle(!toggle);
    editQuest(quest, stuff);
  };

  console.log(id, 'rendering');

  return (
    <Card>
      <small>{id}</small>
      <h5>{title}</h5>
      <p>description: {description}</p>
      <p>reward: {reward}</p>
      <p>start time: {started}</p>
      <p>start date: {started}</p>
      <div>
        <button onClick={() => removeQuest(quest)}>click</button>{' '}
        <button onClick={() => setToggle(!toggle)}>Edit</button>
      </div>
      {toggle && (
        <Form fields={{ title, description, reward }} action={middleAgent} />
      )}
    </Card>
  );
}

export default React.memo(Quest);
