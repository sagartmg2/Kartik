let role = "seller"

export const getRole = () => {
    // console.log("role", role)
    return role;
}

export const isSeller = () => {
    if (role == "seller") {
        return true;
    }
    return false
}


// module.exports = getRole
//  -  
// export default getRole


/* 
    common js module export system
*/

// module.exports.isSeller  = isSeller
// module.exports.getRole= getRole


// module.exports = {
//     isSeller,
//     getRole
// }