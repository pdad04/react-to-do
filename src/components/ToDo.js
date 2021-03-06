import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <span>{ this.props.description }</span>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <button onClick={ this.props.deleteTodo }>Delete</button>
      </li>
    );
  }
}

export default ToDo;
