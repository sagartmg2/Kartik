




// persons[0].first_name + 
// console.log(persons[0].first_name + persons[0].last_name);
// console.log(persons[1].first_name + persons[1].last_name);

/* 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick  and age is 30.
*/


// printName()

function printTaskDetail(index) {
    // let persons = [
    //     {
    //         first_name: "john",
    //         last_name: "Doe",
    //         age: 10
    //     },
    //     {
    //         first_name: "Rajesh",
    //         last_name: "Hamal",
    //         age: 20
    //     },
    //     {
    //         first_name: "John",
    //         last_name: "Wick",
    //         age: 30
    //     }
    // ]

    console.log(todos[index].title + " is " + todos[index].completed);
}

// console.log(todos.length);

// printTaskDetail(0);
// printTaskDetail(1);
// printTaskDetail(2);


/* 
    for loop
        - when we know the number of iterations 
    while loop
    do-while loop
*/






// let num1 = 0;
// // num1++
// // ++num1
// console.log(num1++)
// console.log(num1)

/* 
    post_incremnet++ 
        - increments the data, but cannot be seen instantly. 

    ++pre_incremnet 
    - increments and change can be seen instantly. 

*/



// for ( initializer; condition; modifier) {
// console.log("star of loop");
// for (i = 0; i < 3; i++) {
//     console.log("inside loop " + i);

//     // do other task. 
// }
// console.log("end of loop" + i);



let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": true
    }
]

function printTodo(index) {
    console.log(todos[index].title + " is " +  todos[index].completed);
}

// printTodo(0)
// printTodo(1)
// printTodo()

// console.log(todos[1].title);
// console.log(todos[2].title);


for (let i = 0; i < todos.length; i++) {
    // console.log("inside loop");
    printTodo(i)
}


