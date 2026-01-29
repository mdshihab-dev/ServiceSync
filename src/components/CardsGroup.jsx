import Card from "../components/Card"
import {cardsData} from "../projectData/data"

const CardsGroup = () => {
  return (
    <div className="my-3 md:my-6 flex items-center justify-between gap-3 px-2 md:px-0 md:gap-6 flex-wrap">
     {
        cardsData.map((card, index) =>
        <div key={index} className=" w-[31.2%] grow">
            <Card title={card.title} value={card.value} percent={card.percent} posIcon={card.icon} faild={card.faild} />
        </div>
        )
     }  
    </div>

  )
}

export default CardsGroup