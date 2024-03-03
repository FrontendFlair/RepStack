import { graphicDesignSkillData } from "../Data/SkillData"

function GraphicDesigningSkill() {
  return (
    <div className="px-[5%] pb-12">
    <div className="skillCardContainer gap-6 mt-4 w-full p-4">
        {
            graphicDesignSkillData.map((item, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <p className="flex items-center justify-center">
                        <img className="w-20" src={item.imageURL} alt="" />
                    </p>

                    <h2 className="font-semibold text-2xl text-center text-gray-800 mt-2">
                        {item.title}
                    </h2>

                    <p className="mt-2 text-gray-800 text-center">
                        {item.description}
                    </p>

                    <div className="mt-4 flex justify-center">
                        <button className="text-white px-4 py-2 rounded-lg bg-mainGreen transition duration-300">Learn More</button>
                    </div>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default GraphicDesigningSkill
