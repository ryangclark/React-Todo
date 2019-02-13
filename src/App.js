import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';

const toDoDefaults = [
  {
    id: 1528817077286,
    task: 'Organize Garage',
    completed: false
  },
  {
    id: 1528817084358,
    task: 'Bake Cookies',
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArray: toDoDefaults,
      inputTask: '',
    };
  }
  addTodo = event => {
    event.preventDefault();
    // create new Todo
    const newTodo = {
      id: new Date().getTime(),
      task: this.state.inputTask,
      completed: false
    };
    // set the state to include the old todoArray *plus* the newTodo
    // then, clear inputTask
    this.setState({
      todoArray: [...this.state.todoArray, newTodo],
      inputTask: '',
    });
  };

  handleAddTodoFormChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.inputTask);
  };

  render() {
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          addTodo={this.addTodo}
          state={this.state}
          handleAddTodoFormChanges={this.handleAddTodoFormChanges}
        />
      </div>
    );
  }
}

export default App;
