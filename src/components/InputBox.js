import React, { useState } from 'react';

function InputBox({ addTodo }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
    reward: '',
  });

  const handleChange = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  // const handleClick = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    // addTodo(inputValue);
    setInputValue({
      title: '',
      description: '',
      reward: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputValue.description}
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputValue.reward}
          name="reward"
          onChange={handleChange}
        />
        {/* <button type="submit" onClick={handleClick}> */}
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default InputBox;
