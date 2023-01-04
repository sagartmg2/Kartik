const express = require("express") // common js module 

// import express from "express" //es6 module
const app = express();

app.use(express.json()) // global middleware 

let login = false;

const checkAuthentication = (req, res, next) => {
    console.log("inside check");
    if (login) {
        next()
    } else {
        // return res.status(401).send({
        return res.status(401).send({
            msg: "unauthenticated"
        })
        res.status(401).send("unauthenticated")

        /* 
            401 - unaunthenciated - not logged in  
            403 - unauthorized / forbidden  - logged in but not correct role/access
        */
    }
}

// app.use(checkAuthentication)



app.use((req, res, next) => {

    // req.body = {}
    console.log("middlear -1 ");
    // return res.send("middleware data")
    next()
})

// app.use((req, res, next) => {
//     console.log("middlear -2 ", req.body);
//     // req.body = { id: 1 }
//     // return res.send("middleware data")
//     next()
// })

/* 
middleware
    global middlre - each and every route
    local lmiddlre - only specific routes
    external middleware

middlware -  a function which has read-write access to request and response and  also next middleware

next  in middlware  
    a function which calls/executes our next valid middleware in line 


*/

// app.get("/products", action_middleware )
app.get("/products", (req, res, next) => {
    try {
        databse.find({})
        res.send("data inserted")
        res.send([{ id: 1, name: "product2" }])

    } catch (err) {
        // return next()
        return next(err) // if we pass error / other object in next function , it will call the middleware which has 4 parameters 
        // console.log("err")
        // res.status(500).send({ msg: "Server Error" })
    }

})

app.post("/products", (req, res) => {
    console.log("req.body", req.body)

    try {
        databse.insertOne({})
        res.send("data inserted")

    } catch (err) {
        next(err)
        // console.log("err")
        // res.status(500).send({ msg: "Server Error" })
    }


})

app.get("/get-user", checkAuthentication, (req, res) => {
    res.send({ id: 1, name: "user" })
})

app.use((req, res) => {
    res.status(404).send("resource not found ")
})

app.use((err, req, res, next) => {
    res.status(500).send({ msg: "Server Error" })
})

app.listen(8000, () => {
    console.log("server startted");
})