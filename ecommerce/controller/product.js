const Product = require("../model/Product")

const index =  async (req, res) => {
    let products = await Product.find()
    res.send(products)
}

const store = (req,res,next) =>{
    res.send("get products")
}

module.exports = {
    index,
    store
}