const bcrypt = require("bcrypt")
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    products: [{
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            min: 0,
            required: true,
        },
        quantity: {
            type: Number,
            min: 0,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "shipped", "rejected"],
            required: true,
            default: "pending"
        }
    }],
    created_by: {
        type: ObjectId,
        required: true,
    }
});


/* 
    while createing from clident side
    products[ 
        {
            quantity,
            _id;
        }
    ]

*/



/* 
    orders:[
        {
            products:[ { 100 } ,{}]

        },
        {

        }
    ]
*/


module.exports = mongoose.model("Order", OrderSchema)

