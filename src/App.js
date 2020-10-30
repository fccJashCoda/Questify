import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import QuestLog from './components/QuestLog';
import Form from './components/Form';

function App() {
  const [quests, setQuests] = useState([
    {
      id: uuidv4(),
      title: 'Chocolate',
      description: '',
      reward: '',
      status: 'in progress',
      started: new Date().toLocaleString(),
    },
    {
      id: uuidv4(),
      title: 'Strawberry',
      description: '',
      reward: '',
      status: 'in progress',
      started: new Date().toLocaleString(),
    },
    {
      id: uuidv4(),
      title: 'Whipped Cream',
      description: '',
      reward: '',
      status: 'in progress',
      started: new Date().toLocaleString(),
    },
  ]);

  const addQuest = (quest) => {
    if (quest.title) {
      setQuests([{ id: uuidv4(), ...quest, started: new Date() }, ...quests]);
    }
  };

  const editQuest = (quest, payload = {}) => {
    if (!payload.title) return;
    const editedQuests = JSON.parse(JSON.stringify(quests));
    let editQuest = editedQuests.find((item) => item.id === quest.id);

    Object.keys(payload).forEach((key) => {
      editQuest[key] = payload[key];
    });

    setQuests(editedQuests);
  };

  const removeQuest = (quest) => {
    setQuests(quests.filter((item) => item.id !== quest.id));
  };

  return (
    <div className="App">
      <h1>Questify</h1>
      <Form
        fields={{ title: 'Noodle', description: '', reward: '' }}
        action={addQuest}
      />
      <QuestLog
        quests={quests}
        removeQuest={removeQuest}
        editQuest={editQuest}
      />
    </div>
  );
}

export default App;
