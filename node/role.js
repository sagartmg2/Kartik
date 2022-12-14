let role = "seller"

const getRole = () => {
    // console.log("role", role)
    return role;
}

const isSeller = () => {
    if (role == "seller") {
        return true;
    }
    return false
}


// module.exports = getRole
/* 
    common js module export system
*/

// module.exports.isSeller  = isSeller
// module.exports.getRole= getRole


module.exports = {
    isSeller,
    getRole
}