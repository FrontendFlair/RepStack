import CourseCard from './CourseCard'
import { coursesData } from '../Data/Courses'
import { Link } from 'react-router-dom'

export default function Courses() {
    return (
        <div className='px-[5%] py-12'>
            <h1 className='text-center text-4xl font-semibold'>Our Free Learning Centre</h1>
            <div className="courseContainer mt-8 flex items-start justify-center xl:justify-between gap-6 flex-wrap">
                {
                    coursesData.map((item, index) => (
                        <CourseCard
                            key={index}
                            title={item.title}
                            date={item.date}
                            desc={item.desc}
                            url={item.url}
                        />
                    ))
                }
            </div>
            <div className="flex items-center justify-center mt-8">
            <Link to="/blog"><button className='py-2 px-6 text-white bg-mainGreen rounded-full text-base font-bold hover:scale-105 transition-all duration-300'>View All Blogs</button></Link>
            </div>
        </div>
    )
}
