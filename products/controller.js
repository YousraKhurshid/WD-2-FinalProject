const { connect } = require("mongoose")
require('dotenv').config()
const Products = require('./model')

const getProducts = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const products = await Products.find()
        res.json({ products })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const postProducts = async (req, res) => {
    const { productName, thumbnail, description, price, category, brand, productImage } = req.body

    if (!productName || !thumbnail || !description || !price || !category || !brand || !productImage) {
        res.status(400).json({ message: 'Invalid Payload' })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const checkExisting = await Products.exists({ productName })
            if (checkExisting) {
                res.status(403).json({ message: "Product Already Exists" })
            }
            else {
                await Products.create({ productName, thumbnail, description, price, category, brand, productImage })
                const products = await Products.find()
                res.status(201).json({
                    message: "Product Created Successfully",
                    products
                })
            }

        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

const ProductbyBrand = async (req, res) => {
    const { brand } = req.params
    if (!brand) {
        res.status(403).json({ message: "Please Give BrandName" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.find({ brand })
        res.json({ products })
    }
}

const ProductbyCategory = async (req, res) => {
    const { category } = req.params
    if (!category) {
        res.status(403).json({ message: "Please Give Category Name" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.find({ category })
        res.json({ products })
    }
}

const ProductbyId = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        res.status(403).json({ message: "Please Give Product id" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const products = await Products.findOne({ _id })
        res.json({ products })
    }
}

const updateproduct = async (req, res) => {
    const { _id, productName, productImage } = req.body

    const filter = { _id };
    const update = { productName, productImage };

    try {
        await connect(process.env.MONGO_URI)

        await product.findOneAndUpdate(filter, update, {
            new: true
        });

        const product = await product.find()

        res.json({
            message: "Success",
            product
        })

    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const deleteproduct = async (req, res) => {

    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
        await product.deleteOne({ _id })
        const product = await product.find()
        res.status(200).json({
            message: "Deleted Successfully",
            product
        })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}




module.exports = { getProducts, postProducts, ProductbyBrand, ProductbyCategory, ProductbyId, updateproduct, deleteproduct }
