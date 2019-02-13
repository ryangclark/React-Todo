import React from 'react';
import './Todo.css';

// your components will all go in this `component` directory.
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.state.todoArray.map((todo, index) => {

                return <Todo key={todo.id} index={index} todoItem={todo} />;
            })}
            <TodoForm
                addTodo={props.addTodo}
                handleFormChange={props.handleAddTodoFormChanges}
                task={props.state.inputTask}
            />
        </div>
);}

export default TodoList;