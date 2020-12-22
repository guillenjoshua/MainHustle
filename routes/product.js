const router = require("express").Router();
const Product  = require("../models/Product");
const User = require("../models/User")
const multer = require('multer');
const path = require('path');
const { userInfo } = require("os");



 //Code with Storage Disk
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = process.env.NODE_ENV === "production" ? '../client/build/uploads' :  '../client/public/uploads'
            cb(null, path.join(__dirname, uploadPath))
            },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`)  //file.originalname is the original code and works for heroku deployment
        },
        fileFilter: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            if (ext !== '.jpg' || ext !== '.png') {
                return cb(res.status(400).end('only jpg, png are allowed'), false);
            }
            cb(null, true)
        }
    })

    const upload = multer({ 
        storage: storage,
    }).single("file")


    
    //Dont Touch This
    router.post("/uploadProduct", (req, res) => {
        req.body.sellersEmail = req.user.email
        
        //Saving client to db
        const product = new Product(req.body)
            // console.log(req.body)
        product.save((err) => {
            // console.log(err)
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true })
        })
    });
    


    //Dont Touch This
    router.post("/uploadImage", (req, res) => {

      upload(req, res, err => {
        console.log('file sent/saved to AWS: ', req.files);
        if (err) {
            return res.json({ success: false, err })
        }
        
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })  //req.file.key 
    })
})


    //Getting Products for Dashboard

     router.get("/getProducts", (req, res) => {

        Product.find()
        .exec((err, product) => {
            if(err) return res.status(400).json({ success: false, err})
                 res.json({success: true, product})
               })
     })


     //This is for the product page 
     router.get("/products_by_id", (req, res) => {

        let type = req.query.type
        let productIds = req.query.id 

        if(type === "array") {
        }


        //To find product info that is attache to products id
                            //$in method will help us find product ids since they are varying
        Product.find({'_id' : {$in: productIds}})
        .exec((err, product) => {
            if(err) return req.status(400).send(err)
            return res.status(200).send(product)

        })


        
    });


        //Dont Touch This
        router.post("/cart", (req, res) => {
           
            console.log(req.user)
            req.body.displayName = req.user.displayName
            req.body.email = req.user.email
            console.log(req.body)
           
               
                User.update({
                    _id: req.user._id
                }, {$push:{products:req.body._id}}).then(results => {
                    results.success = 200
                     res.json(results)
                })
           

            // //Saving client to db
            // const userCart = new User(req.body)
            //     // console.log(req.body)
            // userCart.save((err) => {
            //     // console.log(err)
            //     if (err) return res.status(400).json({ success: false, err })
            //     return res.status(200).json({ success: true })
            // })
        });

           router.get("/cart", (req, res) => {
               User.find({_id: req.user._id}).populate("products").then(results => {
                   res.json(results)
               })
           })  
    




module.exports = router; 