const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        default: 0,
    },
    description: {
        type: String,
    },
    images: [String],
    // images: {
    //     type: Array,
    // }
    reviews: [
        {
            comment: {
                type: String
            },
            rating: {
                type: Number,
                min: 0,
                max: 5,
                required: true,
            }
        }
    ],
    created_by: {
        required: true,
        type: ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("Product", ProductSchema)

