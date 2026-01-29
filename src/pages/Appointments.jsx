import AppoinmentCardGroup from '@/components/AppoinmentCardGroup'
import BookingLink from '@/components/BookingLink'
import Pagination from '@/components/Pagination'

const Appointments = () => {
  return (
    <section  className=' px-2 md:mx-0 md:pr-6 overflow-hidden w-full'>
      <AppoinmentCardGroup/>
      <BookingLink/>
      <Pagination/>
    </section>
  )
}

export default Appointments