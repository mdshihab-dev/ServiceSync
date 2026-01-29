import HomeIcon from "../assets/icons/HomeIcon"
import PhoneIcon from "../assets/icons/PhoneIcon"
import CalenderIcon from "../assets/icons/CalenderIcon"
import SettingsIcon from "../assets/icons/settingsIcon"
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

export const profileFormData = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "Jane D.",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "jane@gmail.com",
    },
    {
      label: "Store Name",
      type: "text",
      placeholder: "Ubreakfix Store",
    },
    {
      label: "Store Address",
      type: "text",
      placeholder: "123 Main Street, New York",
    },
  ];

export const callLogsData = [
  {
    id: "call-001",
    phoneNumber: "+1 (555) 345-6789",
    dateTime: ["2025-12-16 ", " 09:42 AM"],
    duration: "5:23",
    callType: "AI Resolved",
    issueType: "Screen",
    outcome: "Quote Provided",
    summary: "Quote Provided",
    audioUrl: "",
    transcript: [
      {
        role: "AI Assistant",
        message: "Thank you for calling UBreakiFix! How can I help you today?",
      },
      {
        role: "Customer",
        message:
          "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
      },
      {
        role: "AI Assistant",
        message:
          "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
      },
      {
        role: "Customer",
        message: "Yes, please! When are you available?",
      },
      {
        role: "AI Assistant",
        message:
          "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
      },
    ],
  },
  {
    id: "call-002",
    phoneNumber: "+1 (555) 345-6789",
    dateTime: ["2025-12-16", "09:42 AM"],
    duration: "5:23",
    callType: "Warm Transfer",
    issueType: "Software",
    outcome: "Escalated to technician",
    summary: "Escalated to technician",
    audioUrl: "",
    transcript: [],
  },
  {
    id: "call-003",
    phoneNumber: "+1 (555) 345-6789",
    dateTime: ["2025-12-16", "09:42 AM"],
    duration: "5:23",
    callType: "Appointment",
    issueType: "Battery",
    outcome: "Appointment Booked",
    summary: "Appointment Booked",
    audioUrl: "",
    transcript: [],
  },
  {
    id: "call-004",
    phoneNumber: "+1 (555) 345-6789",
    dateTime: ["2025-12-16", "09:42 AM"],
    duration: "0:20",
    callType: "Dropped",
    issueType: "Unknown",
    outcome: "Call Dropped",
    summary: "Call Dropped",
    audioUrl: "",
    transcript: [],
  },

  {
    id: "call-005",
    phoneNumber: "+1 (555) 123-4567",
    dateTime: ["2025-12-16", "10:45 AM"],
    duration: "4:32",
    callType: "AI Resolved",
    issueType: "Screen",
    outcome: "Quote provided",
    summary: "Quote provided",
    audioUrl: "/audio/dummy-call-005.mp3",
    transcript: [],
  },
];
