import express from 'express'
import multer from 'multer'
import path from 'path'
import pkg from 'cloudinary'
const cloudinary = pkg
import asyncHandler from 'express-async-handler'
const router = express.Router()
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    )
  },
})
// may get checkFileTypes from stackOverflow
function checkFileType(file, cb) {
  const filetypes = /png|jpg|jpeg/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Only png,j[eg,jpg images are allowed!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// router.post('/',upload.single('image'),(req,res)=>{
//     // res.send(`/${req.file.path}`)
// })
// upload.single('image',{width: 250, height: 250,})
router.post(
  '/',
  upload.single('image',{width: 250, height: 250,}), 
  asyncHandler(async (req, res) => {
    const uploadPhoto = await cloudinary.uploader.upload(
      `${req.file.path}`,
      { width: 250, height: 250 },
    )
    // console.log(`called in uploadRoute`)
    // console.log(`called in upload routes 1`)
    // console.log(uploadPhoto.url)
    res.send(uploadPhoto.url)
  }),
)

export default router
