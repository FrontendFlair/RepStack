import googleImage from "../../src/assets/googleName.png"
import star from "../../src/assets/star.png"
import halfStar from "../../src/assets/half-star.png"
import GoogleReviwCard from "./GoogleReviwCard"
import { googleReviews } from "../Data/Reviews"

function GoogleReviwSection() {
  return (
    <div className='px-[5%] py-16'>
      <div className="w-full h-1 bg-mainGreen "></div>

      {/* top section */}

      <div className="flex items-center justify-between flex-wrap gap-6 pt-6">
        {/* left  */}
        <div className="flex items-center gap-2">
          <img className="w-24" src={googleImage} alt="Google" />
          <p className="font-semibold">Excellent</p>
          <div className="flex items-center gap-1">
            <img className="w-4" src={star} alt="" />
            <img className="w-4" src={star} alt="" />
            <img className="w-4" src={star} alt="" />
            <img className="w-4" src={star} alt="" />
            <img className="w-4" src={halfStar} alt="" />
          </div>
          <p className="font-semibold">4.7 | 114 reviews</p>
        </div>
        {/* right */}

        <button className="bg-[#4285f4] text-white px-3 py-1.5 font-semibold rounded-md text-base hover:bg-[#1266f1]">Write a review</button>

      </div>

      <div className="googlereviewcontainer mt-6">
        {
          googleReviews.map((item, index) => (
            <GoogleReviwCard
              key={index}
              image={item.imageUrl}
              name={item.name}
              date={item.date}
              desc={item.desc}
            />
          ))
        }
      </div>

      <div className="flex items-center justify-center mt-12">
        <button className='px-5 py-2 bg-mainGreen rounded-full hover:scale-110 transition duration-300 text-white font-semibold text-base'>View All Google Reviews</button>
      </div>

        <div className="w-full h-[1px] bg-black mt-12"></div>

    </div>
  )
}

export default GoogleReviwSection
