const router = require("express").Router();
// const express = require('express');
// const router = express.Router();
const Product  = require("../models/Product");
const multer = require('multer');



    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`)
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
         if(err) {
             return res,json({ sucess:false, err})
         }
             return res.json({ success: true, image: res.req.file.path, filename: res.req.file.filename})
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


module.exports = router; 
 


