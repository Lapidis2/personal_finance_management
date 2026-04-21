import PotCard from "@/components/cards/pots"
import Sidebar from "@/components/layout/SideBar"

export default function PotsPage() {
  return (
<div className="lg:ml-20">
    <Sidebar/>
        <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pots</h1>
        <button className="bg-black text-white px-5 py-2 rounded-lg">
          + Add New Pot
        </button>
      </div>

      <div className="max-w-md">
        <PotCard />
      </div>
    </div>
</div>
  )
}