
const mongoose = require('mongoose');


const { Schema } = mongoose;const userSchema = new Schema ({
    googleId: String ,
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
});


mongoose.model('users', userSchema)



// const mongoose = require('mongoose');
// const { Schema } = mongoose;  


// const userSchema = new Schema ({
//     googleId: String 
// }); 


// mongoose.model('users', userSchema)