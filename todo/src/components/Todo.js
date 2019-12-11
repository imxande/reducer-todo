import React, {useReducer} from 'react';
import TodoForm from './TodoForm';
import {reducer, initialState} from '../reducers/todoReducer';

function Todo(){
   const [todoState, dispatch] = useReducer(reducer, initialState)
    // console.log(todoState);
   const addTodo = (newTodoText) => {
    const newTodo = {
        item: newTodoText,
        id: Date.now(),
        completed: false
  } 
  // set state to newTodo remember to spread 
  dispatch({ type: 'ADD_A_TODO'})

}
    return(
        <div>
            <h1>TODO APP!</h1>
            <ul>
                <li> {todoState.item} </li>
            </ul>
            <TodoForm addTodo = {addTodo} />
        </div>
    )
}

export default Todo;