import { useState } from "react"

function Form() {
    const [ name, setName ] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name)
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your name"
                required
                value={name}
                onChange={ (e) => { setName(e.target.value) } }
            />
            <button>Submit</button>
        </form>
    )
}

export default Form;