import React, { useState } from 'react';
import InputBox from './InputBox';

function Form(props) {
  const [fields, setFields] = useState({ ...props.fields });
  const keys = Object.keys(fields);

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resetFields = {};
    keys.forEach((key) => (resetFields[key] = ''));
    setFields({
      ...resetFields,
    });
  };

  console.log(keys);
  console.log(fields);
  return (
    <form onSubmit={handleSubmit}>
      <h3>Form test</h3>
      {keys.map((key) => (
        <InputBox name={key} value={fields[key]} action={handleChange} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
