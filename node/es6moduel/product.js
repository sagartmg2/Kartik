
// const getRole = require("./role")  // common js.  // default export 
// const { getRole } = require("./role")  // common js.  //named export 


//.e s6 

import customgetRole from "./role.js" // default export 

const createProduct = () => {
    let role = customgetRole()
    if (role == "seller") {
        console.log("can create product ");
    } else {
        console.log("forbidden -0 not a seller. ");
    }
}

createProduct();
