import Card from "../components/Card"
import WarningIcon from "../assets/icons/WarningIcon"
import CalenderSmallIcon from "../assets/icons/CalenderSmallIcon"
const Dashboard = () => {
  return (
    <>
      <div className='text-white'>Dashboard</div>
      <Card title={'Total Calls Today'} count={127} percent={'+12%'} preIcon={<WarningIcon />} posIcon={<CalenderSmallIcon />} />
    </>
  )
}

export default Dashboard