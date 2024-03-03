const { Brand } = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()

const AddBrand = async (req, res) => {

    const { BrandName, BrandImage } = req.body

    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please Insert Proper Values"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("DB Connected")

            await Brand.create({ BrandName, BrandImage })
            const brands = await Brand.find()
            res.status(201).json({
                message: "Brand Created Successfully",
                brands: brands
            })
        }

        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

const brandByID = (req, res) => {
    res.json({
        message: "Done"
    })

}

const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        console.log("DB Connected")

        const brands = await Brand.find()
        res.status(200).json({
            brands
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}

const updateBrand = async (req, res) => {
    const { _id, brandName, brandImage } = req.body

    const filter = { _id };
    const update = { brandName, brandImage };

    try {
        await connect(process.env.MONGO_URI)

        await brand.findOneAndUpdate(filter, update, {
            new: true
        });

        const brand = await brand.find()

        res.json({
            message: "Success",
            brand
        })

    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const deleteBrand = async (req, res) => {

    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
        await brand.deleteOne({ _id })
        const brand = await brand.find()
        res.status(200).json({
            message: "Deleted Successfully",
            brand
        })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

module.exports = { AddBrand, brandByID, getAllBrands, updateBrand, deleteBrand }