import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return(
        <div>
            {props.todoState.map(item =>{
                return <Todo item = {item} key = {item.id} toggle = {props.toggle} />
            }) }
            
        </div>
    )
}

export default TodoList