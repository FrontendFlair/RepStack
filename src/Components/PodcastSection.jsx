import React from 'react'
import { Link } from 'react-router-dom'

function PodcastSection() {
    return (
        <div id='podcast' className='bg-[#181818] px-[5%] py-12'>
            <div className="flex items-center justify-between flex-col md:flex-row gap-12">
                {/* left section */}

                <div className="text-mainGreen w-full md:w-[55%]">
                    <h2 className='text-xl italic font-bold'>WATCH OUR LATEST PODCAST WITH <span className='text-white'>MATT PLAPP</span></h2>
                    {/* podcast video */}
                    <div className="w-full h-80 mt-8 bg-white"></div>
                </div>

                {/* right section */}

                <div className="w-full md:w-2/5 text-white">
                    <h1 className='font-bold text-5xl md:text-6xl text-mainGreen pb-3 md:pb-8 leading-[55px] md:leading-[70px]'>Podcast With RepStack</h1>
                    <p className='font-semibold text-[17px]'>Hosted by Azhar Siddiqui, the co-founder at RepStack. Uncover the secrets of hiring, onboarding and training your Virtual Assistant as we share tips, tricks and success stories in our <span className='text-mainGreen font-bold'><Link to="/podcast">Podcasts</Link></span>. Discover how to unlock massive growth in your Digital Marketing Agency by hiring for these three key roles:</p>
                    <ul className='py-4'>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/virtual-marketing-associate-services">Marketing Associates</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/virtual-sales-development-rep"> Sales Development Reps</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/virtual-account-manager-services">Account Managers</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/web-development">Web Development</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/e-ccomerce">E-commerce Services</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/graphic-designing">Graphic Designer</Link></li>
                        <li className='list-disc ml-10 italic text-mainGreen font-semibold text-[18px] white-bullets'><Link to="/video-editor">Video Editing</Link></li>
                    </ul>

                    <button className='py-2 px-6 text-white bg-mainGreen rounded-full text-base font-bold hover:scale-105 transition-all duration-300'>Watch All Our Podcast Episodes</button>

                </div>

            </div>
        </div>
    )
}

export default PodcastSection
