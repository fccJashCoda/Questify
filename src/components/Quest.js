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
  const { title, description, reward } = quest;

  const middleAgent = (stuff) => {
    setToggle(!toggle);
    editQuest(quest, stuff);
  };
  console.log(`${title} with id ${quest.id} rerenders`);
  return (
    <Card>
      {title} <button onClick={() => removeQuest(quest)}>click</button>{' '}
      <button onClick={() => setToggle(!toggle)}>Edit</button>
      {toggle && (
        <Form fields={{ title, description, reward }} action={middleAgent} />
      )}
    </Card>
  );
}

export default React.memo(Quest);
