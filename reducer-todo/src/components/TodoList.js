import React from "react";
import Todo from './Todo';

const TodoList = (props) => {
    


    return (
        <ul>
          {props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
          ))}
        </ul>
      );

};

export default TodoList;