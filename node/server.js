



/* 

    modules 
        - core moudle
                - fs
                - path 
                - http // express built on http module 
        - third party module
            - bcrypt
            - jsonwebtoken
        - local module
*/


const getRole = require("./role")

const createProduct = () => {
    let role = getRole()
    if (role == "seller") {
        console.log("can create product ");
    } else {
        console.log("forbidden -0 not a seller. ");
    }
}

createProduct();







