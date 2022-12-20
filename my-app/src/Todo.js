import { useState } from "react";

/* 
    functional componnet 

 */
function Todo(props) {

    const [todos, setTodo] = useState([]);
    const [task_name, setTaskName] = useState("asdfasdf");
    // let task_name = asdfadfa

    function handleSubmit(e) {
        e.preventDefault()
        console.log("ad dto list ");
        console.log(e.target.task_name.value);
        if (task_name) {
            setTodo([...todos, e.target.task_name.value])
            setTaskName("")
            // task_name = ""
        }
    }

    function handleChange(e) {
        console.log(e.target.value);
        // console.log(e.target.task_name);
        setTaskName(e.target.value)
    }

    console.log("redner");

    return <div>

        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>
            <input value={task_name} name="task_name" onChange={handleChange} />
            <button type="submit">Create </button>
        </form>

        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={todo}>{todo} <button type="button">delete {index} </button></li>
                })
            }
        </ul>

    </div>
}


export default Todo;