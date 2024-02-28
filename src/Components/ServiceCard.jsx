// import { FaRegChartBar } from "react-icons/fa";

function ServiceCard({ icon, title, desc }) {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <div className="border p-4 rounded-full flex items-center justify-center">
                <img className="w-8" src={icon} alt="" />
            </div>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-sm text-[333]">{desc}</p>
        </div>
    )
}

export default ServiceCard
