import AppoinmentCardGroup from '@/components/AppoinmentCardGroup'
import BookingLink from '@/components/BookingLink'
import Pagination from '@/components/Pagination'

const Appointments = () => {
  return (
    <section  className=' pr-6 max-w-svw'>
      <AppoinmentCardGroup/>
      <BookingLink/>
      <Pagination/>
    </section>
  )
}

export default Appointments