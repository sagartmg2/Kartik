

let person1 = {
    name: "John",
    age: 12,
    country: "USA"
}


/* 
    lets assume person2 is of country USA too
    so let reuse person1 varaible
*/

let person2 = person1

/* 
    now all the values of person1 is copied to person 2
    
*/


console.log("person2", person2);

/* 
    TODO: 
    modify person2's country to Nepal
    and check what happens to person1's country if there seems to be a problem fix it. // HINT spread operator. 
*/

console.log(person2.country);
console.log(person1.country);




