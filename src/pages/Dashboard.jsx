import Graph from "@/components/Graph"
import CardsGroup from "../components/CardsGroup"
import RecentActivity from "@/components/RecentActivity"
import Request from "@/components/Request"

const Dashboard = () => {
  return (
    <section className=" md:pr-1.5 w-full">
      <CardsGroup/>
      <div className="px-2 md:px-0">
        <Graph/>
      </div>
      <div className="px-2 md:px-0 mt-3 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-6">
        <RecentActivity/>
        <Request/>
      </div>
    </section>
  )
}

export default Dashboard