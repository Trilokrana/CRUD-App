import EditProductsForm from '@/app/components/EditProductsForm'
import React from 'react'


const getProductsById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/Products/${id}`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Error Fetching the Product")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
const EditProducts = async ({ params }) => {
    const { id } = params
    const { Products } = await getProductsById(id)
    const { title, category, price, quantity, description } = Products
    return (
        <>
            <EditProductsForm id={id} title={title} category={category} price={price} quantity={quantity} description={description} />
        </>
    )
}

export default EditProducts