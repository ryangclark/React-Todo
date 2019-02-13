import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div className="todo">{props.index + 1}. {props.todoItem.task}</div>;
};

export default Todo;