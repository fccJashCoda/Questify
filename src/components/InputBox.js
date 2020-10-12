import React, { useState } from 'react';

function InputBox({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default InputBox;
