const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const keys = require('../config/keys');
const path = require('path');


const s3 = new aws.S3({
  accessKeyId: keys.S3accessKeyId,
  secretAccessKey: keys.S3secretAccessKey,
  Bucket: 'mainhustle'
});


function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
      return cb(null, true);
  } else {
      cb('Images Only!');
  }
}

//If I want to upload multiple put array in place of single
const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: 'mainhustle',
      acl: 'public-read',
      metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString() + '_' + file.originalname)
          cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
      }
  }),
  limits: { fileSize: 10000000 }, 
  fileFilter: function (req, file, cb) {
      checkFileType(file, cb);

  }
}).single('file');



//AWS S3 Try #1
// const s3 = new aws.S3();
// aws.config.update({
//   secretAccessKey: keys.secretAccessKey,
//   accessKeyId: keys.accessKeyId,
//   region: "us-east-2",
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
//   }
// };

// const upload = multer({
//   fileFilter,
//   storage: multerS3({
//     acl: "public-read",
//     s3: s3,
//     bucket: "mainhustle",
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + '_' + file.originalname);
//     },
//   }),
// }).single("file");


//Code with Storage Disk
    // const storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, 'uploads/')
    //     },
    //     filename: (req, file, cb) => {
    //         cb(null, `${Date.now()}_${file.originalname}`)
    //     },
    //     fileFilter: (req, file, cb) => {
    //         const ext = path.extname(file.originalname)
    //         if (ext !== '.jpg' || ext !== '.png') {
    //             return cb(res.status(400).end('only jpg, png are allowed'), false);
    //         }
    //         cb(null, true)
    //     }
    // })

    // const upload = multer({ 
    //     storage: storage,
    // }).single("file")


module.exports = upload;