const bcrypt = require("bcrypt")
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: async function () {
                let count = await mongoose.models.User.find({ email: this.email }).countDocuments();
                if (count) {
                    return false
                }
            },
            message: "Duplicate Email"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    role: {
        type: String,
        required: true,
        enum: ["buyer", "seller"],
        set: function (value) {
            return value.toLowerCase();
        }
    },
});

UserSchema.pre("save", async function (next) {
    console.log("password", this.password)
    let hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed
    next();
})

module.exports = mongoose.model("User", UserSchema)

