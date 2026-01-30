import AppoinmentCardGroup from '@/components/AppoinmentCardGroup'
import BookingLink from '@/components/BookingLink'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'

const Appointments = () => {
  return (
    <section  className=' px-2 overflow-hidden md:mx-0 lg:pr-6 max-w-full'>
      <div className=''>
      <AppoinmentCardGroup/>
      </div>
      <div className=''>
      <BookingLink/>
      </div>
       <div className='mt-5 flex justify-center md:mt-8'>
        <Table/>
       </div>
    </section>
  )
}

export default Appointments