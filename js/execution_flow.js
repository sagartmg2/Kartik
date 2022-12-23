

console.log(1);

const sum = () => console.log(1 + 2);

function handleTask(value) {
    sum()
    console.log("handle it ", value);
}

// let handleTask = () => console.log("handle task. ")

setTimeout(() => {
    console.log("timout");
}, 0)

let promise = new Promise((resolve, reject) => {
    resolve("success")
})

promise.then(res => {
    // console.log("res", res);
    setTimeout(() => {
        console.log("pr-timout");
    }, 0)
})

console.log(2);

handleTask("print ")
