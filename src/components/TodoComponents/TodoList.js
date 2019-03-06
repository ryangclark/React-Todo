import React from 'react';
import './Todo.css';

// your components will all go in this `component` directory.
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.state.todoArray.map((todo, index) => {

                return <Todo 
                            index={index}
                            key={todo.id}
                            todoItem={todo}
                            toggleComplete={props.toggleComplete}
                        />;
            })}
            <TodoForm
                anyTodosCompleted={props.anyTodosCompleted}
                addTodo={props.addTodo}
                clearCompletedTodos={props.clearCompletedTodos}
                handleFormChange={props.handleAddTodoFormChanges}
                task={props.state.inputTask}
            />
        </div>
);}

export default TodoList;