import { Link } from 'react-router-dom'

function CourseCard({ title, date, desc, url }) {
    return (
        <div className='w-full xs:w-[360px]'>
            <div className="w-full h-[220px] rounded-lg bg-black"></div>
            <h2 className='text-mainGreen  font-semibold text-[18px] pt-5'>{title}</h2>
            <p className="text-xs text-[#333]">{date}</p>
            <p className="text-sm text-[#333] py-4">{desc}</p>
            <Link to={url}><p className='font-semibold hover:text-mainGreen'>Read More &rarr;</p></Link>
        </div>
    )
}

export default CourseCard
