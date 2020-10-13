import React, { useState } from 'react';

function InputBox({ addTodo }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
    reward: '',
  });

  const handleChange = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue({
      title: '',
      description: '',
      reward: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={inputValue.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={inputValue.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Reward</label>
          <input
            type="text"
            value={inputValue.reward}
            name="reward"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default InputBox;
