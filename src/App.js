import React, { Component } from 'react';
import './App.css';

const TodoItem = props => (
  <li>{props.text}</li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    // binds "this" in jsx render to App component
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos: todos,
      newTodo: ''
    });
  }

  render() {
    const newTodo = this.state.newTodo;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ));
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>Todo List</p>
          <input
            autoComplete="off"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default App;
