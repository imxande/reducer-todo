import React, {useReducer} from 'react';
import {reducer, initialState} from '../reducers/todoReducer';

function Todo(){
   const [todoState, dispatch] = useReducer(reducer, initialState)
   console.log(todoState); // checking for the object captured
    return(
        <div>
            <h1>TODO APP!</h1>
        </div>
    )
}

export default Todo;