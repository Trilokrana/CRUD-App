'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

const AddProducts = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !category || !price || !quantity || !description) {
            alert('all Fields are required to be filled')
        }

        try {
            const res = await fetch('http://localhost:3000/api/Products', {
                method: 'POST',
                body: JSON.stringify({ title, category, price, quantity, description }),
            })

            if (res.ok) {
                router.push('/')
            } else {
                throw new Error('Failed to create Products')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Product name"
            />

            <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Product Category"
            />
            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Product Price"
            />
            <input
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Product Quantity"
            />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Product description"
            >
            </textarea>

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-lg"
            >
                Add Products
            </button>
        </form>
        </>
    )
}

export default AddProducts