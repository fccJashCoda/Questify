import React, { Component } from 'react';
import InputTest from './InputTest';

export class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.fields,
    };

    this.keys = Object.keys(this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    this.setState({
      ...this.state,
      [field]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    const resetState = {};
    this.keys.map((key) => (resetState[key] = ''));
    this.setState({
      ...resetState,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.keys.map((field) => (
            <InputTest
              name={field}
              value={this.state[field]}
              action={this.handleChange}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default React.memo(InputForm);
