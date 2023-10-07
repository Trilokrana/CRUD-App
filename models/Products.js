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

module.exports = mongoose.model('Product', ProductSchema);
