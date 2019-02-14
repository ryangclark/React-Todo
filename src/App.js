import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';

const todoDefaults = [
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
      inputTask: '',
      todoArray: todoDefaults,
    };
    console.log(this.state.anyTodoCompleted)
  }

  addTodo = event => {
    event.preventDefault();
    // check for empty form
    if (!this.state.inputTask) {return;}
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
      inputTask: ''
    });
  };

  checkForCompletedTodos = () => {
    for (let todo of this.state.todoArray) {
      if (todo.completed) {
        console.log('checkForCompletedTodos: True');
        return true;
      }
    }
    console.log('checkForCompletedTodos: Else');
    return false;
  };

  clearCompletedTodos = () => {
    this.setState({
      todoArray: this.state.todoArray.filter(todo => !todo.completed)
    })
  }

  handleAddTodoFormChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleComplete = todoId => {
    this.setState({
      todoArray: this.state.todoArray.map(todo => {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    })
  }

  render() {
    let anyTodosCompleted = false;
    for (let todo of this.state.todoArray) {
      if (todo.completed) {
        console.log('anyTodosCompleted: True');
        anyTodosCompleted = true;
        break;
      }
    }
    return (
      <div className="app-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          anyTodosCompleted={anyTodosCompleted}
          addTodo={this.addTodo}
          clearCompletedTodos={this.clearCompletedTodos}
          handleAddTodoFormChanges={this.handleAddTodoFormChanges}
          state={this.state}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
