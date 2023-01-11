const express = require("express")
const router = express.Router();

const User = require("../model/User")

const { body, validationResult } = require('express-validator')
/* 
    http methods
    get
    post
    put
    delete

*/
router.post("/signup", body('name').exists().withMessage("required field"), (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
},
    async (req, res, next) => {
        // User.create({
        //     name: "jan 10",
        //     email: "email@em.com",
        //     password: "passwod"
        // })

        // User.create(req.body, (err, data) => {
        //     console.log(err?.message)
        //     console.log(data)
        //     res.send("singup ")
        // })

        try {

            console.log("do task one")

            let user = await User.create(req.body)
            res.send(user)
        }
        catch (err) {
            next(err)
        }

    })

router.post("/login", (req, res) => {
    res.send("login")
})

module.exports = router



