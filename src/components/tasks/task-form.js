import React, { Component, PropTypes } from 'react';


export class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {title: '', type: 'food'};

    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearInput() {
    this.setState({title: ''});
  }

  onChange(event) {
    this.setState({title: event.target.value});
  }

  onChange2(event) {
    this.setState({type: event.target.value});
  }

  onKeyUp(event) {
    if (event.keyCode === 27) {
      this.onSubmit(event);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    const type = this.state.type;
    if (title.length) this.props.createTask(title, type);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder="What needs to be done?"
          ref="titleInput"
          type="text"
          value={this.state.title}/>
        <input
          className="task-form__input"
          value={this.state.type}
          onChange={this.onChange2}
          type="text"/>
        <input type="submit" />

      </form>
    );
  }
}
