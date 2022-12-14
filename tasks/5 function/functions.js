

let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        age: 10
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal",
        age: 20
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 30
    },
]

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

function printUserDetail(index) {
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

    console.log(persons[index].first_name + " " + persons[index].last_name);

}

printUserDetail(0);
printUserDetail(1);
printUserDetail(2);