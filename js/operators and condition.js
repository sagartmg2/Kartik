/* 
    data type
        primite
            - string // text
            - Number 
               - integer 
                - decimal / float / double
            -boolean
                - true
                - false
            undefined
                - variable declaraed but not initilalized
            null
                - no existance.
            
        non primitive data type  // colelections
        - object
            - array
                
*/

let brands = ["samsnug", "apple"]
// brands = brands - "lg"
brands[1] = "lg"
console.log(brands);

let person = {
    name: "ram"
}

person.name = "changed valude"
console.log(person.name);

let fruit = "app"

fruit = fruit + "le"
// fruit += "and oranges"

console.log({ fruit });

let num1 = 10
num1 = num1 % 3
console.log(num1);


/* 
    % modulous
    returns the remainder.

    / division

*/


let f_name = "ram"
let l_name = "grg"

let full_name = f_name + " " + l_name
console.log(full_name);


// console.log("100" + 1);
// console.log("100" - 1);


/* 
    comparision opertoar
    >
    <
    ==
    >=
    <=
*/

/* 
    strict comaprision operator
    ===
    checks the data type
*/


// console.log("1" == 1);
// console.log("1" === 1);
// console.log(1 >= 1);
// console.log(1 > 1);


/* 
    logical operator
    AND - &&   -- all the supplied conditions must be true
    OR - || - returns true if any one of our condition is true
    NOT - !
*/


// console.log(condition_one && condition_two);

// console.log(true && true && false);
// console.log(true && true || false);



console.log(true && 100);



/* 
    conditions 
*/


// if (right_click) {
//     curson move
// } else (left_click){
//         show menu
// }


let will_rain = false
let has_probability = false


// if (<condition>) {
if (will_rain) {
    console.log("take umbrella");
} else if (has_probability) {
    console.log("your wish ");
} else {
    console.log("no need");
}


console.log(true && undefined);

// if (true && 200) {
if (true && undefined) {
    console.log("truthy value");
} else {
    console.log("fasly value");
}


/* 
    falsy values
    - false
    - undefined
    - 0
    - null
    - NaN
    - ""


*/


// if ([]) {
if ({}) {
    console.log("string true valuse");
} else {
    console.log("empty string");
}































let countries = [
    {
        name: "nepal"
    },
    {
        name: "India"
    }
]

/*
    use of index in array
    always start from 0
*/

// countries[1].name

