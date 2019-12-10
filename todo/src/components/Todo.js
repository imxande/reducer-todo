import React, {useReducer} from 'react';
import {reducer, initialState} from '../reducers/todoReducer';

function Todo(){
   const [todoState, dispatch] = useReducer(reducer, initialState)
   console.log(todoState); // checking for the object captured
    return(
        <div>
            <h1>TODO APP!</h1>
            <ul>
                <li> {todoState.item} </li>
            </ul>
        </div>
    )
}

export default Todo;