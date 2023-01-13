
const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    /* if token and token valide */
    let token = req.headers.authorization?.split(" ")[1]
    let user = null;
    if (token) {
        try{
            user = jwt.verify(token, process.env.JWT_SECRET);
        }
        catch(err){
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

const checkRole = () => { console.log("check role") };



module.exports = {
    authenticate,

}