
const mongoose = require('mongoose');

const {Schema} = mongoose;


const userSchema = new Schema ({
    googleId: String,
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
}); 

const User = mongoose.model('User', userSchema)
module.exports = User 
