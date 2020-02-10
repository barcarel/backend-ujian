const express = require('express')
const {productController } = require('../controller')
const router = express.Router()

//get
router.get('/getCategories', productController.getCategories)
router.get('/getProducts', productController.getProducts)
router.get('/getProductCat', productController.getProductCat)

//add
router.post('/addCategories', productController.addCategories)
router.post('/addProducts', productController.addProducts)
// router.post('/addProductCat', productController.addProductCat)

//edit
router.post('/editCategories', productController.editCategories)
router.post('/editProducts', productController.editProducts)

//delete
router.delete('/deleteCategory', productController.deleteCategory)
router.delete('/deleteProduct', productController.deleteProduct)
router.delete('/deleteProductCat', productController.deleteProductCat)


module.exports = router
