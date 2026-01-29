import AppoinmentCardGroup from '@/components/AppoinmentCardGroup'
import BookingLink from '@/components/BookingLink'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'

const Appointments = () => {
  return (
    <section  className=' px-2 md:mx-0 md:pr-6 w-full'>
      <div className=' max-md:max-w-[90%]'>
      <AppoinmentCardGroup/>
      </div>
      <div className=' max-md:max-w-[90%]'>
      <BookingLink/>
      </div>
       <div className='mt-5 w-screen md:w-full md:mt-8'>
        <Table/>
    </div>
    </section>
  )
}

export default Appointments