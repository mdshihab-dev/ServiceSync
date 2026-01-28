import {appointmentsCardData} from '../projectData/data'
import Card from './Card'

const AppoinmentCardGroup = () => {
  return (
    <section className="my-6 flex items-center justify-between gap-10 flex-wrap">
     {
        appointmentsCardData.map((card, index) =>
        <div key={index} className=" w-[29.5%] grow">
            <Card title={card.title} value={card.value} percent={card.percent} preIcon={card.icon} />
        </div>
        )
     }  
    </section>
  )
}

export default AppoinmentCardGroup