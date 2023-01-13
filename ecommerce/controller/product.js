const Product = require("../model/Product")

const index = async (req, res) => {
    let products = await Product.find()
    res.send(products)
}

const store = async (req, res, next) => {
    try {
        let product = await Product.create(req.body)
        res.send(product)
    }
    catch (err) {
        next(err)
    }
    // req.body.name

}

module.exports = {
    index,
    store
}