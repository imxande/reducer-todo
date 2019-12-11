import React, {useReducer} from 'react';
import TodoForm from './TodoForm';
import {reducer, initialState} from '../reducers/todoReducer';

function Todo(){
   const [todoState, dispatch] = useReducer(reducer, initialState)
 
 const addTodo = item => dispatch({ type: 'ADD_TODO', text: item });

    return(
        <div>
            <h1>TODO APP!</h1>
            <ul>
                {todoState.items.map(todo => (
                    todo.item
                ))}
            </ul>
            <TodoForm addTodo = {addTodo} />
        </div>
    )
}

export default Todo;