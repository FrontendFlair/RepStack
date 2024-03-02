import ReviwCard from './ReviwCard'
import { ReviewsDetail } from '../Data/Reviews'

function ReviewSection() {
    return (
        <div className='px-[3%] py-12 pt-20 bg-green-500 text-white'>
            <h1 className='text-5xl text-center font-semibold'>Client Reviews</h1>
            <div className="reviewContainer mt-12">
                {
                    ReviewsDetail.map((item, index) => (
                        <ReviwCard
                            key={index}
                            name={item.name}
                            skill={item.skill}
                            image={item.imageUrl}
                        />
                    ))
                }
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className='px-5 py-2 bg-mainGreen rounded-full hover:scale-110 transition duration-300 text-white font-semibold text-base'>View All Reviews</button>
            </div>
        </div>
    )
}

export default ReviewSection
