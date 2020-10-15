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

export default InputTest;

// import React, { Component } from 'react';

// export class InputTest extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { action, ...restProps } = this.props;
//     return (
//       <div>
//         <input
//           type="text"
//           {...restProps}
//           onChange={(e) => action(e.target.name, e.target.value)}
//         />
//       </div>
//     );
//   }
// }

// export default InputTest;
