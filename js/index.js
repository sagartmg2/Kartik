

console.log("start");
console.log(1);
console.log(2);



const sum = () => {
    console.log("inside sum");
    // for (let i = 0; i < 1000; i++) {
    //     console.log(i);
    // }
    console.log("end--sum");



}

sum();


const doSomething = () => {
    console.log("do something");
}


/*  
    asynchronous
    - tasks that happens in future. 


    callback - cb
    - function that gets passed to another function as an argument/parameter

*/
// setTimeout(doSomething,3000)


// setTimeout(doSomething, 0)
setTimeout(() => { console.log("do something.. "); }, 0)


let promise = new Promise((resolve, reject) => {
    resolve({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })
    // reject({
    //     msg: "error occured"
    // })

    // setTimeout(() => {
    //     reject({
    //         msg: "error occured"
    //     })

    // }, 0)

})


promise
    .then((res) => {
        console.log({ res });
    })
    .catch((err) => {
        console.log(err);
    })


// try {
//     let a = "b" + "c"
//     console.log({ a });
// } catch (err) {
//     console.log(err.message);
// }

console.log("end");
