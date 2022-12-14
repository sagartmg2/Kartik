
// commong js module systeml
// import   // es6 module system

// const fs = require("fs") // core module

// const authenticate = require("./authenticate")


// import custom from "./authenticate.js";
import { login, signup } from "./authenticate.js";


login();
signup();
// console.log(custom.login());
// login();

// const bcrypt = require('bcrypt'); // third-party mdule
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
//     console.log(hash);
// });

// console.log(__filename);
// console.log(__dirname);

// fs.writeFileSync
// fs.writeFileSync("custom.text", "hello world")

// fs.readFile("./package.json", (err, data) => {
//     console.log("err", err);
//     // console.log("data", data.toString());
//     console.log("data", JSON.parse(data));
// })