import Graph from "@/components/Graph"
import CardsGroup from "../components/CardsGroup"
import RecentActivity from "@/components/RecentActivity"
import Request from "@/components/Request"

const Dashboard = () => {
  return (
    <section className="pr-1.5 w-full">
      <CardsGroup/>
      <Graph/>
      <div className=" mt-6 flex gap-6">
        <RecentActivity/>
        <Request/>
      </div>
    </section>
  )
}

export default Dashboard