import ServiceCard from './ServiceCard'
import { serviceData } from '../Data/data'

function HowItsWork() {
    return (
        <div className='px-[5%] py-12 bg-mainGreen text-white'>
            <h1 className='text-center text-6xl font-semibold'>How it works?</h1>
            <div className="workContainer">
                {
                    serviceData.map((item, index) => (
                        <ServiceCard key={index} title={item.title} desc={item.desc} icon={item.url} />
                    ))
                }
            </div>
        </div>
    )
}

export default HowItsWork
