import React, {useState} from 'react';


function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const handleChanges = e => {
      setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    }

    const handleRemove = e => {
        e.preventDefault();
        props.remove();
      }

    return(
        <div>
            <label htmlFor = 'input'>Add a todo to the list</label>
            <form onSubmit = {handleSubmit}  > 

                <input 
                    name = 'todo'
                    placeholder = 'Type a todo'
                    id = 'input'
                    type = 'text'
                    value= {input}
                    onChange = {handleChanges}
                /><br/>
                <button type= 'submit' > Add Todo</button>
            </form>
            {/* clear button */}
            <button onClick= {handleRemove}>Remove Todo</button>
        </div>
    )
}


export default TodoForm;