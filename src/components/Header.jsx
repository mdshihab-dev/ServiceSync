import { Link } from "react-router"
import BallIcon from "../assets/icons/BallIcon"
import avater from "../assets/images/avatar.png"

const Header = () => {
  return (
    <header className=" bg-primary w-full flex items-center justify-between px-6 py-2">
      <h1 className=" font-inter font-normal text-[32px] leading-9 text-white">
        Dashboard Overview
      </h1>

      <div className=" flex items-center justify-center space-x-10">
        <BallIcon/>
        <img src={avater} alt="avater" />
      </div>
    </header>

  )
}

export default Header