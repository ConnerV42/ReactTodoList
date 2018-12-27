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
          <h1>Simple Todo App</h1>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
          />
          <button className="save-button" type="submit">Add</button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div >
    );
  }
}

export default App;
