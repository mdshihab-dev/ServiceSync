import { useLocation } from "react-router"
import avater from "../assets/images/avatar.png"
import NotificationIcon from "@/assets/icons/NotificationIcon";
const Header = () => {
  const {pathname} = useLocation()
  return (
    <header className=" sticky top-0 bg-primary z-50 w-auto flex items-center justify-between px-2 md:px-6 py-2">
      <h1 className=" font-inter font-normal whitespace-nowrap text-xl md:text-[32px] leading-9 text-white">
        {pathname === '/' && 'Dashboard Overview'}
        {pathname === '/call-history' && 'Call Logs'}
        {pathname === '/appointments' && 'Appointments'}
        {pathname === '/settings' && 'Settings'}
        {pathname === '/settings/profile' && 'Settings'}
      </h1>

      <div className=" flex items-center justify-end md:justify-center space-x-2.5 md:space-x-10">
        <NotificationIcon className={' text-white size-5 md:size-8'}/>
        <div className=" w-7.5 h-7.5 md:w-full md:h-full">
          <img src={avater} alt="avater" />
        </div>
      </div>
    </header>

  )
}

export default Header