const express = require("express")
// import axios from "axios"
// const axiios = require()"axuis"

const app = express()


/*
 middleware 
    - funcition which has access to requst and restponse. and also next valid middleware in line
 */

const checkAuthentication = (req, res, next) => {
    console.log("inisde authnenticateon");
    let login_status = false;
    if (login_status) {
        next()
    }
    else {
        res.status(401).send({ msg: "not logged in " })
    }
}
// app.use(checkAuthentication) // global middlewaer.


const product_action_middleware = (req, res, next) => {
    res.send([{}, {}])
}

app.get("/products", product_action_middleware)

app.get("/orders", checkAuthentication, (req, res, next) => {
    res.send("orders...")
})

app.listen(8000, () => {
    console.log("server started. ")
})

/* 
    sql
    no-sql // not only sql.
        -reference documents    
        - embeded documents
*/
