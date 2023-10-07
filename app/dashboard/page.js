import Navbar from "../components/Navbar"
import Products from "../components/Products"
import LogOut from '@/app/components/LogOut'
export default function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Products />
            <LogOut />
        </div>
    )

}