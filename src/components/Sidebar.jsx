import { Link, useLocation } from "react-router"
import menuItems from "../projectData/data"
import HomeIcon from "../assets/icons/HomeIcon"
import PhoneIcon from "../assets/icons/PhoneIcon"
import CalenderIcon from "../assets/icons/CalenderIcon"
import SettingsIcon from "../assets/icons/SettingsIcon"
import LogoutIcon from "../assets/icons/LogoutIcon"
import logo from '../assets/images/logo.png'
// import dotImage from '../assets/images/bg-dots.png'

const Sidebar = () => {

    const { pathname } = useLocation()

    return (
        <div className='h-lvh flex flex-col bg-primary pt-9.5 pb-13 border border-borderColor'>
            <div className="w-fit mx-auto">
                <img src={logo} alt="logo" />
            </div>
            {/* ============ Menu Items ============ */}
            <ul className='mt-18 font-medium text-base leading-[150%] text-white px-2 space-y-7'>
                {
                menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.routeName} className={` py-1 px-2 flex items-center gap-4 rounded-xl ${pathname ==  item.routeName ? 'inset-shadow border-b border-[rgba(255,255,255,0.50)]' : ''}`}>
                            <span className="  text-white flex items-center justify-center ">
                                {item.icon == 'HomeIcon' && <HomeIcon />}
                                {item.icon == 'PhoneIcon' && <PhoneIcon />}
                                {item.icon == 'CalenderIcon' && <CalenderIcon />}
                                {item.icon == 'SettingsIcon' && <SettingsIcon />}
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