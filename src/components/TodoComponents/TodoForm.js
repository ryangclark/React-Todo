import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <form onSubmit={props.addTodo}>
                <input
                    type="text"
                    value={props.task}
                    onChange={props.handleFormChange}
                    name="inputTask"
                    placeholder="Something need doing?"
                />
                <button 
                    type="submit">
                        Add ToDo
                </button>
            </form>
            <button 
                type="button"
                disabled={!props.anyTodosCompleted}
                onClick={props.clearCompletedTodos}>
                    Clear Completed
            </button>
        </div>
    );
};

export default TodoForm;