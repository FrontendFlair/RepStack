import google from "../../src/assets/google.png"
import star from "../../src/assets/star.png"

function GoogleReviwCard({ image, name, date, desc }) {
    return (
        <div className='min-h-20 hover:-translate-y-1 transition duration-300'>
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                    <img className="w-10 h-10 rounded-full object-cover" src={image} alt="user" />
                    <div className="">
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>
                <div>
                    <img className="w-5" src={google} alt="" />
                </div>
            </div>
            <div className="flex items-center gap-0.5 my-3">
                <img className="w-4" src={star} alt="star" />
                <img className="w-4" src={star} alt="star" />
                <img className="w-4" src={star} alt="star" />
                <img className="w-4" src={star} alt="star" />
                <img className="w-4" src={star} alt="star" />
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default GoogleReviwCard
