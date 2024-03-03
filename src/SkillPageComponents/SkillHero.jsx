import SkillSectionBtn from './SkillSectionBtn'

function SkillHero(props) {
    return (
        <div className='flex items-center justify-between flex-col md:flex-row gap-8 py-12 md:py-20 px-[5%] bg-[#e9e9e9]'>
            {/* left section */}

            <div className="w-full md:w-1/2 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-14 h-[2.5px] ml-3 bg-mainGreen"></div>
                    <h3 className='tracking-widest text-balance'>KICKSTART YOUR MARKETING CAMPAIGNS WITH OUR</h3>
                </div>
                <h1 className='text-5xl font-semibold'>{props.skillTitle}</h1>
                <p className='text-[#333] text-[18px]'>Empower your online presence with our comprehensive web development solutions. We offer cutting-edge website design and development services tailored to your unique requirements, ensuring seamless user experiences and maximum functionality.</p>
                <ul className="ml-10">
                    <li className='list-disc text-[18px]'>Customized Website Design and Development</li>
                    <li className='list-disc text-[18px]'>Responsive Web Design across all Devices</li>
                    <li className='list-disc text-[18px]'>E-commerce Solutions for Your Business</li>
                </ul>
                <SkillSectionBtn btnText="Book a Strategy Session" />
            </div>

            {/* right */}

            <div className="w-full md:w-1/2">
                <div className="w-full h-80 bg-sky-800"></div>
            </div>

        </div>
    )
}

export default SkillHero
