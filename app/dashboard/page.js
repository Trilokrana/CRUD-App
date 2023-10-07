import Navbar from "../components/Navbar"
import LogOut from '@/app/components/LogOut'
import { Products } from "../components/Products"
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Products />
            <LogOut />
        </>
    )

}