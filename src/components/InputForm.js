import React, { Component } from 'react';
import InputTest from './InputTest';

export class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.fields,
      // name: this.props.name || '',
      // age: this.props.age || '',
    };

    this.keys = Object.keys(this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    console.log(this.state);
    this.setState({
      ...this.state,
      [field]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    const teststate = {};
    this.keys.map((key) => (teststate[key] = ''));
    console.log(teststate);
    this.setState({
      ...teststate,
    });
  }

  render() {
    console.log(this.keys);
    const teststate = {};
    this.keys.map((key) => (teststate[key] = ''));
    console.log('teststate', teststate);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <InputTest
            name="name"
            value={this.state.name}
            action={this.handleChange}
          />
          <InputTest
            name="age"
            value={this.state.age}
            action={this.handleChange}
          /> */}
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
