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
import CalenderSmallIcon from "@/assets/icons/CalenderSmallIcon"
import CheckedIcon from "@/assets/icons/CheckedIcon"
import WarningIcon from "@/assets/icons/WarningIcon"

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

export const activitiesData = [
    {
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      dotColor: "bg-success",
    },
    {
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      dotColor: "bg-warn",
    },
    {
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      dotColor: "bg-success",
    },
    {
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      dotColor: "bg-error",
    },
  ];


export const appointmentsCardData = [
    {
      icon: <CalenderSmallIcon />,
      title: 'Total Booked',
      value: '34',
      percent: '+8 this week',
    },
    { 
      icon: <CheckedIcon />,
      title: 'AI Booked',
      value: '28',
      percent: '82% of total',
    },
    {
      icon: <WarningIcon />,
      title: 'Pending',
      value: '3',
      percent: 'Awaiting confirmation',
    }
]


export const paginationTableData = [
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "09:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "10:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "11:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "12:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "02:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "03:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "04:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "04:30",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "12:00",
    },
    {
        clientName: "Jane.D",
        clientPhone: "01960685765",
        clientMail: "admin@gmail.com",
        device: "Apple/Iphone 13pro",
        repairType: "Screen",
        date: "02/06/2026",
        slotNo: "1",
        startTime: "09:00",
    },
]

