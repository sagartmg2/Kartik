
// const getRole = require("./role")  // common js.  // default export 
const { getRole } = require("./role")  // common js.  //named export 





const createProduct = () => {
    let role = getRole()
    if (role == "seller") {
        console.log("can create product ");
    } else {
        console.log("forbidden -0 not a seller. ");
    }
}

createProduct();
