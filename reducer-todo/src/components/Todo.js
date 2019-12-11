import React from 'react';

const Todo = props => {
  return (
    <li
      className={`item${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.todo}
    </li>
  );
};

export default Todo;