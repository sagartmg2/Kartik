import { useState } from "react";

/* 
    functional componnet 

 */
function Todo() {

    const [todos, setTodo] = useState([]);
    const [task_name, setTaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log("ad dto list ");
        console.log(e.target.task_name.value);

    }

    function handleChange(e) {
        console.log(e.target.value);
        // console.log(e.target.task_name);
        setTaskName(e.target.value)
    }

    console.log("redner");

    return <div>

        <form onSubmit={handleSubmit}>
            <input value={task_name} name="task_name" onChange={handleChange} />
            <button type="submit">Create </button>
        </form>

        <ul>
            <li>defaul one</li>
        </ul>

    </div>
}


export default Todo;