import React, {useReducer} from 'react';
import './App.css';

import {reducer, initialState} from './reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState)
  console.log(todoState);

  const addTodo = input => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Date.now()
    }
    dispatch({type:'ADD_TODO', payload: newTodo})
  }
  return (
    <div className="App">
      <TodoList  todoState = {todoState} />
      <TodoForm addTodo = {addTodo} />
      
    </div>
  );
}

export default App;
