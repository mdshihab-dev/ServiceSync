import HomeIcon from "../assets/icons/HomeIcon"
import PhoneIcon from "../assets/icons/PhoneIcon"
import CalenderIcon from "../assets/icons/CalenderIcon"
import SettingsIcon from "../assets/icons/SettingsIcon"
import CardPhoneIcon from '../assets/icons/card-icons/CardPhoneIcon'
import CardBotIcon from '../assets/icons/card-icons/CardBotIcon'
import CardTransferIcon from '../assets/icons/card-icons/CardTransferIcon'
import CardCalenderIcon from '../assets/icons/card-icons/CardCalenderIcon'
import CardFailedIcon from '../assets/icons/card-icons/CardFailedIcon'
import CardClockIcon from '../assets/icons/card-icons/CardClockIcon'

export const menuItems = [
   {
        icon: <HomeIcon/>,
        text: 'Dashboard Overview',
        routeName: '/'
    },
    {
        icon: <PhoneIcon/>,
        text: 'Call Logs',
        routeName: '/call-history'
    },
    {
        icon: <CalenderIcon/>,
        text: 'Appointments',
        routeName: '/appointments'
    },
    {
        icon: <SettingsIcon/>,
        text: 'Settings',
        routeName: '/settings'
    },
]

// ============================

export const cardsData = [
    {
      title: 'Total Calls Today',
      value: '127',
      percent: '+12%',
      icon: <CardPhoneIcon />
    },
    { 
      title: 'AI-Handled Calls',
      value: '98',
      percent: '+77%',
      icon: <CardBotIcon />
    },
    {
      title: 'Warm Transfer',
      value: '23',
      percent: '+18%',
      icon: <CardTransferIcon />
    },
    {
      title: 'Appointments Booked',
      value: '34',
      percent: '+8%',
      icon: <CardCalenderIcon />
    },
    {
      title: 'Missed/Failed Calls',
      value: '6',
      percent: '-3%',
      faild: true,
      icon: <CardFailedIcon />
    },
    {
      title: 'Avg Call Duration',
      value: '3:42',
      percent: '+15%',
      icon: <CardClockIcon />
    }
]
