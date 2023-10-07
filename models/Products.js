import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        title: 'String',
        category: 'String',
        price: 'number',
        quantity: 'number',
        description:'String'
    },
    {
        timestamps:true
    }
)

const Product= mongoose.models.Product ||mongoose.model('Product',ProductSchema)
export default Product