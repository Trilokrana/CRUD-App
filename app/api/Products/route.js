import connectMongoDB from "@/libs/mongoDB"
import { NextResponse } from "next/server"
import Product from "@/models/Products"


export async function POST(request) {
    const { title, category, price, quantity, description } = await request.json()
    await connectMongoDB()
    await Product.create({ title, category, price, quantity, description })
    return NextResponse.json({ message: 'Product created' }, { status: 201 })
}

export async function GET(request) {
    await connectMongoDB();
    const Products = await Product.find()
    return NextResponse.json({ Products })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB();
    await Product.findByIdAndDelete(id)
    const Products = await Product.findById()
    return NextResponse.json({ message: 'Product deleted' }, { status: 201 })
}