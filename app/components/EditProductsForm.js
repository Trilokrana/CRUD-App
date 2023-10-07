'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "./Navbar"

const EditProductsForm = ({ id, title, category, price, quantity, description }) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newCategory, setNewCategory] = useState(category)
    const [newPrice, setNewPrice] = useState(price)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newDescription, setNewDescription] = useState(description)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:3000/api/Products/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ newTitle, newCategory, newPrice, newQuantity, newDescription }),
            })


            if (!res.ok) {
                throw new Error('Error Updating the Product')
            }


            router.refresh()
            router.push("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <h1 className='text-xl font-semibold p-1 mt-5'>Edit Products</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className="border border-slate-500 px-8 py-2 rounded-lg "
                    type="text"
                    placeholder="Product name"
                />

                <input
                    onChange={(e) => setNewCategory(e.target.value)}
                    value={newCategory}
                    className="border border-slate-500 px-8 py-2 rounded-lg"
                    type="text"
                    placeholder="Product Category"
                />
                <input

                    onChange={(e) => setNewPrice(e.target.value)}
                    value={newPrice}
                    className="border border-slate-500 px-8 py-2 rounded-lg"
                    type="text"
                    placeholder="Product Price"
                />
                <input

                    onChange={(e) => setNewQuantity(e.target.value)}
                    value={newQuantity}
                    className="border border-slate-500 px-8 py-2 rounded-lg"
                    type="text"
                    placeholder="Product Quantity"
                />
                <textarea
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    className="border border-slate-500 px-8 py-2 rounded-lg"
                    type="text"
                    placeholder="Product description"
                >
                </textarea>

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-lg"
                >
                    Update Products
                </button>
            </form>
        </>
    )
}

export default EditProductsForm