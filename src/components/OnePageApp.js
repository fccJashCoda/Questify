// test only
import React, { Component } from 'react';

class OnePageApp extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: Math.random() * Math.random(), item: this.state.task },
      ],
      task: '',
    });
  }

  removeTask(task) {
    this.setState({
      tasks: this.state.tasks.filter((item) => item.id !== task.id),
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.item}
            <button onClick={() => this.removeTask(task)}>X</button>
          </li>
        ))}
      </div>
    );
  }
}

export default OnePageApp;
