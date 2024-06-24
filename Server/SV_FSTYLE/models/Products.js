const db = require("./db");

const productSchema = db.mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        require: true
    },
    size:{
        type: [String],
        require: true
    },
    color:{
        type: [String],
        require: true
    },
    description: {
        type: String,
    },
    categories: {
        type: String,
        require: true
    },

    quantity: {
        type: Number,
    },
    createdAT: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }
})

const Product = db.mongoose.model("products", productSchema);
module.exports = { Product };