import connectToMongoDB from "@/lib/mongoDB";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newCategory: category, newPrice: price, newQuantity: quantity, newDescription: description } = await request.json()
    await connectToMongoDB()
    await Product.findByIdAndUpdate(id, { title, category, price, quantity, description })
    return NextResponse.json({ message: 'Product updated' }, { status: 201 })
}

export async function GET(request, { params }) {
    const { id } = params
    await connectToMongoDB();
    const Products = await Product.findOne({ _id: id })
    return NextResponse.json({ Products }, { status: 201 })
}