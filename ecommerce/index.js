const express = require("express") // common js 
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
mongoose.set("strictQuery", false);


const product_route = require("./route/product")
app.use("/api/products",product_route)

mongoose.connect('mongodb://127.0.0.1:27017/kartik')
    .then(() => console.log('Connected!'));

app.post("/api/signup", (req, res) => {
    console.log(req.body)
    /* 
        db.users.insertOne({
            name:
            email:
        })
    */
    res.send({
        msg: "Test successful"
    })

})

app.get("/test", (req, res) => {
    res.send({
        msg: "Test successful"
    })
})


app.listen(8000, () => {
    console.log("server started");
})
/* 
    MVC 
        - modal
        - view 
        - controller

*/