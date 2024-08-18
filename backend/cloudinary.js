
// if(process.env.NODE_ENV!=="production"){

//     require('dotenv').config();
// }

const pkg = require('cloudinary').v2;
const cloudinary=pkg
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

const storage=new CloudinaryStorage({
    cloudinary,
    params:{
    folder:"YelpCamp",
    allowedFormats:['jpeg','png','jpg']
    }
})
module.exports={
    cloudinary,storage
}