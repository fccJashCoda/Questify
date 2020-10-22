import React from 'react';
import Quest from './Quest';

function QuestLog(props) {
  const { quests, removeQuest, editQuest } = props;
  return (
    <div>
      <h2>QuestLog</h2>
      {quests.map((quest) => (
        <Quest
          key={quest.id}
          quest={quest}
          removeQuest={removeQuest}
          editQuest={editQuest}
        />
      ))}
    </div>
  );
}

export default React.memo(QuestLog);
