import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoReducer, initialState } from './reducers/reducer.js'


function App() {
  const [ state, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = item => dispatch({ type: 'ADD_TODO', text: item });
  const toggleComplete = id => dispatch({ type: 'TOGGLE_COMPLETE', id: id });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });


  return (
    <div className="App">
        <TodoList todos={state.todos} toggleComplete={toggleComplete}/>
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
