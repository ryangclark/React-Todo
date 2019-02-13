import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <form onSubmit={props.addTodo} >
                <input
                    type="text"
                    value={props.task}
                    onChange={props.handleFormChange}
                    name="inputTask"
                    placeholder="...todo"
                />
                <button type="submit">Add ToDo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;