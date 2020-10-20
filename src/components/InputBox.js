import React from 'react';

function InputBox({ action, name, ...rest }) {
  return (
    <div>
      <label>{name} </label>
      <input
        type="text"
        name={name}
        {...rest}
        onChange={(e) => action(e.target.name, e.target.value)}
      />
    </div>
  );
}

export default InputBox;
