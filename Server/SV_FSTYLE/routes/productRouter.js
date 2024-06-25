const Router = require('express')
const {addProduct, updateProduct, deleteProduct} = require('../apiControllers/productController')
const { uploadAnh } = require('../middleware/upLoadFile')

const productRouter = Router()

productRouter.post('/add-product',uploadAnh, addProduct)

productRouter.put('/update-product/:id',uploadAnh, updateProduct)

productRouter.delete('/delete-product/:id', deleteProduct)

module.exports = productRouter