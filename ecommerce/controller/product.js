const Product = require("../model/Product")


const index = async (req, res) => {

    // req.query.search_term

    // let products = await Product.find({
    //     // name: RegExp(req.query.search_term, "i"),
    //     // brands: RegExp(req.query.search_term, "i"),
    // })


    // db.products.find({$or:[{name:"levis"},{brands:"levis"} ]})

    let regex_search_term = RegExp(req.query.search_term, "i");
    let price_from = parseFloat(req.query.price_from) || 0
    let price_to = parseFloat(req.query.price_to) || 999999999999
    let page = parseInt(req.query.page) || 1
    let per_page = parseInt(req.query.per_page) || 2

    let sort = {}
    sort_by = req.query.sort
    // if (sort_by == "nameasc") {
    //     sort = { name: 1 }
    // }else if (sort_by == "namedesc") {
    //     sort = { name: -1 }
    // }

    switch (sort_by) {
        case "nameasc":
            sort = { name: 1 }
            break;
        case "namedesc":
            sort = { name: -1 }
            break;
        case "priceasc":
            sort = { price: 1 }
            break;
        case "pricedesc":
            sort = { price: -1 }
            break;
        default:
            break;
    }





    // let products = await Product.find(   { $or: [{ name: regex_search_term }, { brands: regex_search_term }] })
    // db.products.find({ $or:[{name:RegExp("levis","i")},{brands:RegExp("levis","i")}]  })

    // let products = await Product.find(
    //     {
    //         $and: [
    //             {
    //                 $or: [
    //                     { name: regex_search_term },
    //                     { brands: regex_search_term }
    //                 ]
    //             },
    //             {
    //                 $and: [{ price: { $gte: price_from } }, { price: { $lt: price_to } }]
    //             }
    //         ]
    //     }
    // )

    // db.products.updateMany({},{$set:{created_by: ObjectId("63c535f439185d9212c75cec")}})

    // let products = await Product.find()

    /* 
        aggregate 
            - stages
             -pipeline
             -framework
     */

    // db.products.aggregate([
    let count = await Product.aggregate([
        {
            $match: {
                $or: [{ name: regex_search_term }, { brands: regex_search_term }]
            }
        },
        {
            $match: {
                $and: [{ price: { $gte: price_from } }, { price: { $lt: price_to } }]
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "created_by",
                foreignField: "_id",
                as: "created_by"
            }
        },
        {
            $unwind: "$created_by"
        },
        {
            $project: {
                "created_by.password": 0
            }
        },
        {
            $sort: sort
        }
    ])

    console.log(count.length)

    let meta = {
        total: count.length,
        page,
        per_page
    }

    let products = await Product.aggregate([
        {
            $match: {
                $or: [{ name: regex_search_term }, { brands: regex_search_term }]
            }
        },
        {
            $match: {
                $and: [{ price: { $gte: price_from } }, { price: { $lt: price_to } }]
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "created_by",
                foreignField: "_id",
                as: "created_by"
            }
        },
        {
            $unwind: "$created_by"
        },
        {
            $project: {
                "created_by.password": 0
            }
        },
        {
            $sort: sort
        },
        {
            $skip: ((page - 1) * per_page)
        },
        {
            $limit: per_page
        },

    ])

    // db.products.find().sort({})



    res.send({
        data: products,
        meta,
    })
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