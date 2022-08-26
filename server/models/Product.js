const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,"pls provide the title"],
    },
    description : {
        type : String,
        required : [true,"pls provide the description"],
    },
    imageUrl : {
        type : String,
        required : [true,"pls provide the imageUrl"],
    },
    price : {
        type : Number,
        required : [true,"pls provide the price"],
    },
    qty : {
        type : Number,
        default: 1,
    },
    size : {
        type : [String],
        required : [true,"pls provide the size"],
    },
},{timestamps :true}
)

module.exports = mongoose.model("Product",ProductSchema)