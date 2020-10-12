import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => console.log(this.state.inputValue)
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleClick}>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default InputBox;
