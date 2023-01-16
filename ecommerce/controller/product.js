const Product = require("../model/Product")


const index = async (req, res) => {

    // req.query.search_term

    // let products = await Product.find({
    //     // name: RegExp(req.query.search_term, "i"),
    //     // brands: RegExp(req.query.search_term, "i"),
    // })


    // db.products.find({$or:[{name:"levis"},{brands:"levis"} ]})

    let regex_search_term = RegExp(req.query.search_term, "i");


    // let products = await Product.find({ $or: [{ name: regex_search_term }, { brands: regex_search_term }] })

    /* 
        aggregate 
            - stages
             -pipeline
             -framework
     */

    // db.products.aggregate([
    let products = await Product.aggregate([
        {
            $match: {
                name: regex_search_term
            }
        },
        {
            $match: {
                price: { $gt: 20 },
            }
        }
    ])



    res.send(products)
}

const store = async (req, res, next) => {
    try {
        // console.log(req.body)
        // console.log(req.files)
        let images = req.files.map(el => el.filename)

        let product = await Product.create({
            ...req.body,
            images: images,
            created_by: req.user._id,
        })
        res.send(product)
    }
    catch (err) {
        next(err)
    }
    // req.body.name

}
const update = async (req, res, next) => {

    // console.log(req.params)
    // console.log(req.query)
    // return;
    try {
        // console.log(req.body)
        // console.log(req.files)
        // let images = req.files.map(el => el.filename)

        // let product = await Product.create({ ...req.body, images: images })
        let product = await Product.findByIdAndUpdate(req.params.id, { ...req.body }, {
            new: true,
        })
        res.send(product)
    }
    catch (err) {
        next(err)
    }
    // req.body.name

}
const remove = async (req, res, next) => {

    // console.log(req.params)
    // console.log(req.query)
    // return;
    try {
        // console.log(req.body)
        // console.log(req.files)
        // let images = req.files.map(el => el.filename)

        // let product = await Product.create({ ...req.body, images: images })
        let product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    }
    catch (err) {
        next(err)
    }
    // req.body.name

}

module.exports = {
    index,
    store,
    update,
    remove
}