import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div className={`todo${props.todoItem.completed ? ' todo-completed' : ''}`}>
        <input
            type="checkbox"
            name={props.todoItem.task}
            value={props.index} 
            onChange={
                () => props.toggleComplete(props.todoItem.id)
            }
            checked={props.todoItem.completed}
        />
        {props.index + 1}. {props.todoItem.task}
    </div>;
};

export default Todo;