import React from 'react';

function InputTest(props) {
  const { action, ...restProps } = props;
  return (
    <div>
      <input
        type="text"
        {...restProps}
        onChange={(e) => action(e.target.name, e.target.value)}
      />
    </div>
  );
}

export default React.memo(InputTest);
