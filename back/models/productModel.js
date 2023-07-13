import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productPrice: {
        type: Number,
        trim: true,
        required: true,
    },
    productModel: {
        type: String,
        required: true,
        trim: true
    },
    productSize: {
        type: Number,
        required: true,
    },
    productResolution: {
        type:String,
        required: true
    },
    productVolume: {
        type:Number,
        required: true,
        trim: true
    },
    productBattery: {
        type:Number,
        required: true
    },
    productImage: {
        type:String,
        required: true,

    },
    cloudinaryPublicId: {
        type:String,
        required: true
    }
}, {
    timestamps: true //important
})

const Product = mongoose.model('Product', productSchema)

export default Product;