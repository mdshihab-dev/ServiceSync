import { Outlet } from "react-router"
import Sidebar from "../Sidebar"
import Header from "../Header"

const Layout = () => {
    return (
        <div className="flex bg-[linear-gradient(118.53deg,#020618_-34.38%,#162456_54.59%,#0F172B_143.57%)]">
            <Sidebar />
            <div className=" w-full">
                <Header />
                <div className="ml-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout