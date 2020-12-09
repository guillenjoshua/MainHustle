const mongoose = require ('mongoose');
const {Schema} = mongoose

const shippingSchema = new Schema ({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Shipping = mongoose.model('Shipping', shippingSchema)
module.exports = Shipping