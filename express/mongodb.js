
/* CRUD */
db.users.insertOne({
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
})
db.users.insertMany([{
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
},
{
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
}])

db.users.find({ _id: ObjectId("63ba9c912f077e339294efb8") })
db.users.find({ role: "buyer" })
db.users.find({})

db.users.updateMany({ _id: ObjectId("63ba9c912f077e339294efb8") }, {$unse t: { seller: 1 } })
db.users.updateMany({ role: "buyer" }, {$set: { balance: 0 } })
db.users.deleteOne({ _id: ObjectId("63ba9c912f077e339294efb8") })
db.users.deleteOne()

ObjectId("63ba9cc02f077e339294efb9"),

db.users.find({_id:{$ne:ObjectId("63ba9cc02f077e339294efb9")}})

db.products.insertMany([
    {
        name:"one",
        brands:["puma","levis"]
    },
    {
        name:"two",
        brands:["puma","adidas"]
    },
    {
        name:"three",
        brands:["adidas"]
    },
])

db.products.insertOne({
    name: 'four',
    brands: [ 'puma',  ],
    price: 1000
})


db.products.find({brands:{$in:["adidas","levis"]}})

db.products.updateMany({},{$set:{price:0}})


db.products.find({brands:"puma",price:{$lt:1000},price:{$gte:500}})

db.products.find({$or:[{price:{$lt:1000}},{brands:"puma"}]})
