const express = require("express") // common js 
const product_route = require("./route/product")
const auth_route = require("./route/auth")

require("./config/database")
const app = express();
app.use(express.json())
require('dotenv').config()
app.use(express.static('uploads'))
app.use("/api/products", product_route)

// app.use(require("./route/auth"))
app.use("/api", auth_route)

app.get("/test", (req, res) => {
    res.send({
        msg: "Test successful"
    })
})


/* 
    error handling middleware
*/
app.use((err, req, res, next) => {

    let status = 500;
    let msg = "Server Error"
    let errors = []


    if (err.name == "ValidationError") {
        status = 400
        msg = "Bad Request "
        Object.entries(err.errors).forEach((err) => {
            errors.push({
                msg: err[1].message,
                param: err[0]
            })
        })
    }

    res.status(status).send({
        msg,
        error: err.message,
        errors,
    })
})

app.listen(8000, () => {
    console.log("server started");
})
/* 
    MVC 
        - modal // database
        - view  // browser 
        - controller // logic

*/