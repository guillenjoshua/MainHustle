const mongoose = require ('mongoose');
const { Schema } = mongoose

const productSchema = new Schema ({
    name: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        defaultValue: "Seller"
    },
    shippings: {
        type: mongoose.Types.ObjectId,
        ref: "Shipping"
    }
})
const Product = mongoose.model('Product', productSchema)

module.exports = Product