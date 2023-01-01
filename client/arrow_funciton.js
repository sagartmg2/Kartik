

// function sum(num1, num2) {
//     return num1 + num2
// }

// let sum = (num1, num2) => {
//     return num1 + num2
// }

let sum = (num1, num2) => num1 + num2

let result = sum(1, 2)
let result2 = sum(2, 2)
// console.log(result)

// console.log(result2)


let marriage_status = true;
let age = 18
// if(marriage_status){
//     console.log("he is married ");
// }else{
// if(age >20){
//     he can later
// }else{
//     console.log("he cant' ");
// }

// console.log(marriage_status ? "he is married " : (age > 20 ? "he can later" : "he cant"));


// for (i = 1; i <= 3; i++) {
//     console.log("lop");
// }


let users = [
    {
        "name": "Leanne Graham",
    },
    {
        "name": "Second",
    },

]


// for (let i = 0; i <= users.length; i++) {
//     // for (let i = 0; i < users.length; i++) {
//     // console.log(users[i]?.name);
//     printUser(users[i])
// }

// function printUser(user) {
//     console.log(user?.name);
// }

// const printUser = (user) => console.log(user?.name)


// users.forEach(printUser)
users.forEach(user => console.log(user?.name))

