import React, {useState} from 'react';


function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const handleChanges = e => {
       e.preventDefault();
       setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    }

    return(
        <div>
            <label htmlFor = 'input'>Add a todo to the list</label>
            <form onSubmit = {handleSubmit}  > 

                <input 
                    name = 'item'
                    placeholder = 'Type a todo'
                    id = 'input'
                    type = 'text'
                    value= {input}
                    onChange = {handleChanges}
                />
            </form>
            <button > Add Todo</button>
            <button > Remove Todo</button>
            
        </div>
    )
}


export default TodoForm;