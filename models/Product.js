const mongoose = require ('mongoose');
const { Schema } = mongoose

const productSchema = new Schema ({
    // name: { 
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // },
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }, 
    sellersEmail: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        default: [],
        required: false
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: false,
        defaultValue: "Seller"
    },
    shippings: {
        type: mongoose.Types.ObjectId,
        ref: "Shipping"
    }
}, {timestamps: true})


const Product = mongoose.model('Product', productSchema)

module.exports = Product