const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt")

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


            let existing_user = await User.find({ email: req.body.email }).countDocuments();
            console.log(existing_user)

            /* falsy values 
                null
                undefined
                0
                ....
            */

            // if(existing_user){
            //     res.status(400).send({
            //         "errors": [
            //             {
            //                 "msg": "email already exists. ",
            //                 "param": "email",
            //             }
            //         ]
            //     })
            // }

            let hashed = await bcrypt.hash(req.body.password, 10);

            // return;
            console.log(hashed)
            console.log("do task one")

            // $2b$10$M.v.JXUCrhXX8OLW3bQhPuM1h02xgZ4Kb/PDsAjAXYfbh81gqxNdi
            // $2b$10$XIOrQDIaC3MgCnFLWv/a2.ePPjTiGflLQxtzIgCTFoyZDjwBsutdi

            // let user = await User.create({ ...req.body, password: hashed })
            let user = await User.create({ ...req.body })
            res.send(user)
        }
        catch (err) {
            next(err)
        }

    })

router.post("/login", async (req, res) => {

    let user = await User.findOne({ email: req.body.email }); //{}

    if (user) {
        let status = await bcrypt.compare(req.body.password, user.password);
        if (status) {
            return res.send({
                token: "token"
            })
        }
    }

    return res.status(401).send({
        msg: "Invalid Credentails"
    })

})

module.exports = router



