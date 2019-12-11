import React, {useState} from 'react';


function TodoForm(props) {
    const [input, setInput] = useState('')

    return(
        <div>
            <label htmlFor = 'input'>Add a todo to the list</label>
            <form > 
                <input 
                    name = 'item'
                    placeholder = 'Type a todo'
                    id = 'input'
                    type = 'text'
                />
            </form>
            <button type = 'submit' > Add Todo</button>
            <button > Remove Todo</button>
            
        </div>
    )
}


export default TodoForm;