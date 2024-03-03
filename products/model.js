const { Schema, model } = require('mongoose')

const productSchema = new Schema(
    {
        productName: {
            type: String,
            unique: true,
            required: true
        },
        productImage: {
            type: String,
            required: true
        }
    }
)

const product = model('product', productSchema)
module.exports = product