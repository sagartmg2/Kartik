import React, { useState, useEffect } from 'react';

const FetchTodos = () => {
    console.log("re-render");
    // let todos =  [];
    const [todos, setTodos] = useState([])


    /* 
        lifecycle methods
            - component did mount
            - componet did update 
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data)
            })
        fetch('https://ecommerce-sagartmg2.vercel.app/api/products')
            .then(response => response.json())
            .then(data => {
                // setTodos(data)
            })
    }, []);


    return (
        <>
            <h1>Todos </h1>
            <div className='container'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "true" : "false"}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>

            </div>
        </>
    );
}

export default FetchTodos;
