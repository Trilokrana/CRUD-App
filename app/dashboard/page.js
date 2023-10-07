import Navbar from "../components/Navbar"
import LogOut from '@/app/components/LogOut'
import ProductsList from "../components/ProductsList"

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <ProductsList />
            <LogOut />
        </>
    )

}