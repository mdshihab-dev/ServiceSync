import AppoinmentCardGroup from '@/components/AppoinmentCardGroup'
import BookingLink from '@/components/BookingLink'
import Pagination from '@/components/Pagination'

const Appointments = () => {
  return (
    <section  className=' mr-6 '>
      <AppoinmentCardGroup/>
      <BookingLink/>
      <Pagination/>
    </section>
  )
}

export default Appointments