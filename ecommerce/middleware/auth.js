
const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    /* if token and token valide */
    let token = req.headers.authorization?.split(" ")[1]
    let user = null;
    if (token) {
        try {
            user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
        }
        catch (err) {
            return res.status(401).send({
                msg: "Invalid",
                error: err.messsage
            })
        }
    }

    if (user) {
        next()
    }
    else {
        res.status(401).send({
            msg: "Invalid Token"
        })
    }
}

const isSeller = (req, res, next) => {

    if (req.user.role === "seller") {
        return next();
    }
    res.status(403).send({
        msg: "Access Denied, only for sller"
    })

}
const isBuyer = (req, res, next) => {

    if (req.user.role === "buyer") {
        return next();
    }
    res.status(403).send({
        msg: "Access Denied, only for buyer"
    })

}



module.exports = {
    authenticate,
    isSeller,
    isBuyer

}