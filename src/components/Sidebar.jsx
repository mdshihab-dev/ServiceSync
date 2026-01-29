import { Link, useLocation } from "react-router"
import {menuItems} from "../projectData/data"
import LogoutIcon from "../assets/icons/LogoutIcon"
import logo from '../assets/images/logo.png'

const Sidebar = () => {

    const { pathname } = useLocation()

    return (
        <div className=' h-screen sticky top-0 flex flex-col bg-primary pt-9.5 pb-13 border border-borderColor'>
            <div className="w-fit mx-auto">
                <img src={logo} alt="logo" />
            </div>
            {/* ============ Menu Items ============ */}
            <ul className='mt-18 font-medium text-base leading-[150%] text-white px-2 space-y-7'>
                {
                menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.routeName} className={` py-1 px-2 flex items-center gap-4 rounded-xl ${pathname == item.routeName || pathname.includes(item.text.toLowerCase()) ? 'inset-shadow border-b border-[rgba(255,255,255,0.50)]' : ''}`}>
                            <span className="  text-white flex items-center justify-center ">
                                {item.icon}
                            </span>
                            <span className=" font-inter whitespace-nowrap font-medium text-base leading-[150%] text-white">
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))
                }
            </ul>
            <button className="flex items-center gap-4 ml-4 mt-auto cursor-pointer">
                <LogoutIcon/>
                <span className="font-medium text-base leading-[150%] text-[#FF1100]">
                    Log Out
                </span>
            </button>
        </div>
    )
}

export default Sidebar