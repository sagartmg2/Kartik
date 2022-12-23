




/*
    for loop - when we know number of iterations. 

    while loop
*/


let number = "original number";

let calculate_multiplication = true;

function findMultiplication(number, length) {

    // let number = 10;

    console.log({ length });

    for (i = 1; i <= length; i++) {
        let result = i * number;
        // console.log(number + ' *i = result')
        console.log(`${number} x ${i} = ${i * number}`)
        // console.log(`${number} x ${i} = ${result}`)
    }
}

if (calculate_multiplication) {
    let number = 8
    var till = 10;
    findMultiplication(number, till)
}



console.log(number);






