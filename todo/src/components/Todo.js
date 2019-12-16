import React from 'react';

function Todo(props){
    const handleClick = e => {
        e.preventDefault();
        props.toggle(props.item.id)
    }
    return(
        <div>
            <h2 className = {props.item.completed ? 'todoCompleted': 'notCompleted'}
            onClick = {handleClick}>
                {props.item.todo}</h2>
           
        </div>
    )
}

export default Todo;