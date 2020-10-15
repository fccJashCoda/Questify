import React, { Component } from 'react';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
      </div>
    );
  }
}

export default Input;
