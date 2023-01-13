const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// import {login,sign} from 

const User = require("../model/User")

const login = async (req, res, next) => {
    try {

        let user = await User.findOne({ email: req.body.email }); // {name,email...}  or null

        if (user) {
            let status = await bcrypt.compare(req.body.password, user.password);
            if (status) {
                let obj = user.toObject()
                delete obj.password
                var token = jwt.sign(obj, process.env.JWT_SECRET);
                return res.send({
                    token: token
                })
            }
        }

        return res.status(401).send({
            msg: "Invalid Credentails"
        })
    }
    catch (err) {
        next(err)
    }

}


const signup = async (req, res, next) => {
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

        // let hashed = await bcrypt.hash(req.body.password, 10);

        // // return;
        // console.log(hashed)
        // console.log("do task one")

        // $2b$10$M.v.JXUCrhXX8OLW3bQhPuM1h02xgZ4Kb/PDsAjAXYfbh81gqxNdi
        // $2b$10$XIOrQDIaC3MgCnFLWv/a2.ePPjTiGflLQxtzIgCTFoyZDjwBsutdi

        // let user = await User.create({ ...req.body, password: hashed })
        let user = await User.create({ ...req.body })
        res.send(user)
    }
    catch (err) {
        next(err)
    }

}

module.exports = {
    login,
    signup
}
