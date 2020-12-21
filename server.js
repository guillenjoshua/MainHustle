const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport'); 
const keys = require('./config/keys');
require('./services/passport');
const cors = require("cors");
const path = require('path');

mongoose.connect(keys.mongoURI); 
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session()); 

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
  }



require('./routes/authRoutes')(app); 



app.use('/api/product', require('./routes/product'));



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.get('/test', (req, res) => {
    res.json({test: 123})
  })



const PORT = process.env.PORT || 5000
app.listen(PORT, function(){
    console.log("app is listening" + PORT)
}); 