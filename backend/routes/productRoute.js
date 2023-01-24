import express from 'express'
import { admin, protect } from '../middleware/authMiddleware.js'
import {
  getProduct,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controller/productController.js'
const router = express.Router()
router.get('/top',getTopProducts)
router.get('/', getProduct)
router.post('/', protect, admin, createProduct)
router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)
router.post('/:id/reviews', protect, createProductReview)
export default router
