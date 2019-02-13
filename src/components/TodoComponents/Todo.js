import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div className="todo">
        <input 
            type="checkbox"
            name={props.todoItem.task}
            value={props.index} 
            onClick={
                // props.toggleComplete
                event => console.log(event.target.value)
            }
            checked={props.todoItem.completed}
        />
        {props.index + 1}. {props.todoItem.task}
    </div>;
};

export default Todo;