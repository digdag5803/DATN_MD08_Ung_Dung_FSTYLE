const { Product } = require("../models/Products")
const asyncHandler = require('express-async-handler');

const addProduct =  asyncHandler(async (req, res) => {
    const {name, image, price, size, color, description, categories, quantity} = req.body;

    const existingProduct = await Product.findOne({ name})
    if (existingProduct) { //sản phẩm đã tồn tại
        res.status(400)
        throw new Error('Product already exists')
    }
    const newProduct = new Product({
        name,
        image: image ?? 'https://bavi.edu.vn/App/images/no-image-news.png',
        price,
        size,
        color,
        description: description ?? 'Sản phẩm chưa có mô tả',
        categories,
        quantity: quantity ?? 0,
    })
    await newProduct.save()
    res.status(201).json({ // trả về http code 201
        message: 'Product created',
        data:{
            name:  newProduct.name,
            price: newProduct.price,
            size: newProduct.size,
            color: newProduct.color,
            description: newProduct.description,
            categories: newProduct.categories,
            quantity: newProduct.quantity,
        }
    }) 
})

const updateProduct = async(req, res) =>{
    try {
        const updateID = req.params.id;
        const updateData = req.body;
        const result = await Product.updateOne({_id: updateID}, updateData)
        res.status(200).json({updateCount: result.nModified})
    } catch (error) {
        res.status(500).json(err)
    }
}

const deleteProduct = async(req, res) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete successfully");
    }catch(err){
        res.status(500).json(err)}
}
module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
}
