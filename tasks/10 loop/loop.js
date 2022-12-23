
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:
    output
    task one is incomplete
    task two is incomplete
    task three is completed

*/



// todos[0]
// todos[1]
// todos[2]

// function printTodoDetail(parameters) {
function printTodoDetail(todo) {
    // console.log(todo.title);
    if (todo.completed) {
        console.log(todo.title + " is complted");
    }else{
        // console.log(todo.title + " is incomplte");
        console.log(`${todo.title}  is incomplte`);
    }

    console.log(`${todo.tile} is ${ todo.completed ? "complted" : "incomplte" }`);

}

for (let i = 0; i < todos.length; i++) {
    printTodoDetail(todos[i])
    // printTodoDetail(arguement)
}