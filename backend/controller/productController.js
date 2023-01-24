import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProduct = asyncHandler(async (req, res) => {
  // console.log('products called')
  const pageSize=8;
  const page=Number(req.query.pageNumber)||1
  const keyword=req.query.keyword?{
    name:{
      $regex:req.query.keyword,
      $options:'i'
    }
  }:{}
  // console.log('called in product controller')
  // console.log(keyword)
  const count=await Product.countDocuments({...keyword})
  const products = await Product.find({...keyword})
  .limit(pageSize)
  .skip(pageSize*(page-1))

  res.json({products,page,pages:Math.ceil(count/pageSize)})
})

// des Delete a product
// route DELETE /api/products/:id
// acess Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})
// des Delete a product
// route DELETE /api/products/:id
// access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product Deleted' })
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})
// des Create a product
// route POST /api/products
// access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/image/sample.jpg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 2,
    numReviews: 0,
    description: 'sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})
// des Update a product
// route PUT /api/products/:id
// access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body
  const product = await Product.findById(req.params.id)
  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
  const updatedProduct = await product.save()
  res.status(201).json(updatedProduct)
})
// des Update a new review
// route PUT /api/products/:id/review
// access Private
const createProductReview = asyncHandler(async (req, res) => {
  const {
 rating,comment
  } = req.body
  const product = await Product.findById(req.params.id)
  if (product) {
    const alreadyReviewed=product.reviews.find(r=>r.user.toString()===req.user._id.toString())
    if(alreadyReviewed){
      res.status(400)
      throw new Error('You have already reviewed this product.')
    }
    const review={
      name:req.user.name,
      rating:Number(rating),
      comment,
      user:req.user._id,
    }
    product.reviews.push(review)
    product.numReviews=product.reviews.length
    product.rating=product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length
    await product.save()
    res.status(201)
    res.json({message:'Successfully created review for this product'})
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
  const updatedProduct = await product.save()
  res.status(201).json(updatedProduct)
})
// des Get top rated product
// route GET /api/products/top
// access Public
const getTopProducts = asyncHandler(async (req, res) => {
 const products=await Product.find({}).sort({rating:-1}).limit(5)
 res.json(products)
})

export {
  getProduct,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts
}
