import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function PricongCard() {
    return (
        <div className="pricingContainer">
            {/* 1st card */}
            <div id='pricingCard' className='relative bg-white py-6 px-4 pb-16'>
                <h3 className='text-center text-2xl text-mainGreen font-bold'>Web Development</h3>
                <p className='text-xs text-center pt-1 pb-6'>Mission Driven, Long-Term</p>
                <div className="flex items-center gap-3 pb-3">
                    <FaCheck />
                    <p className="font-bold text-sm"> Certified in HighLevel</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaCheck />
                    <p className="font-bold text-sm">  Launch Key Media Buying Campaigns</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Paid Ads</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Email Outreach</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Lead Generation</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="font-bold text-sm"> CRM & Automations</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Workflows</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Landing Pages & Forms</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="font-bold text-sm">  Social Media Management</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Content Creation</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Content Management</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Social Media Outreach</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Content Marketing</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Excellent Leadership Qualities</p>
                </div>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">  Launch and Manage Podcasts/Webinars</p>
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">  Experience working with US Digital Marketing Agencies</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4 ">
                    <button className="px-7 py-2.5 absolute bottom-10 shadow-sm rounded-full bg-mainGreen text-white font-semibold hover:scale-110 hover:bg-black transition duration-300"> <Link to="/web-development">Get Started</Link></button>
                </div>
            </div>
            {/* 1st card end */}

            {/* 2nd card */}
            <div id='pricingCard' className='bg-white relative py-6 px-4 pb-12'>
                <h3 className='text-center text-2xl text-mainGreen font-bold'>E-commerce Service</h3>
                <p className='text-xs text-center pt-1 pb-16'>Mission Driven, Long-Term</p>
                <div className="flex items-center gap-3">
                    <FaCheck />
                    <p className="font-bold text-sm"> Appointment Setting</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">80 - 150 outbound calls a day</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Follow-ups with all your leads</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Scheduling 1 - 3 Demo Calls</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="font-bold text-sm"> Technical Skills</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">CRM Management</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Opportunity Management</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Calendar Management
                    </li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Taking Inbound Calls & Qualifying Prospects</p>
                </div>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">  Strong Interpersonal Skills</p>
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">   Strong Communication Skills</p>
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Experience working with US Digital Marketing Agencies</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4 ">
                    <button className="px-7 py-2.5 absolute bottom-10 shadow-sm rounded-full bg-mainGreen text-white font-semibold hover:scale-110 hover:bg-black transition duration-300"><Link to="/e-ccomerce">Get Started</Link></button>
                </div>
            </div>
            {/* 2nd card end */}

            {/* 3rd card */}
            <div id='pricingCard' className='bg-white relative py-6 px-4'>
                <h3 className='text-center text-2xl text-mainGreen font-bold'>Graphic Desinger</h3>
                <p className='text-xs text-center pt-1 pb-16'>Mission Driven, Long-Term</p>
                <div className="flex items-center gap-3">
                    <FaCheck />
                    <p className="font-bold text-sm">  Client Retention</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Client management</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Making upsells</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="font-bold text-sm"> Customer Success Management</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Maximize profitability</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Fostering positive relations with your clients</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Culturally Fit</p>
                </div>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">  Project Management</p>
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Team Management</p>
                </div>
                <div className="flex items-start gap-3 pt-4 pb-12">
                    <FaCheck />
                    <p className="text-sm text-[#333]">Experience working with US Digital Marketing Agencies</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4 ">
                    <button className="px-7 py-2.5 absolute bottom-10 shadow-sm rounded-full bg-mainGreen text-white font-semibold hover:scale-110 hover:bg-black transition duration-300"><Link to="/graphic-designing">Get Started</Link></button>
                </div>
            </div>
            {/* 3rd card end */}

            {/* 4th card */}
            <div id='pricingCard' className='bg-white relative py-6 px-4'>
                <h3 className='text-center text-2xl text-mainGreen font-bold'>Video Editing</h3>
                <p className='text-xs text-center pt-1 pb-16'>Mission Driven, Long-Term</p>
                <div className="flex items-center gap-3">
                    <FaCheck />
                    <p className="font-bold text-sm">  Client Retention</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Client management</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Making upsells</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="font-bold text-sm"> Customer Success Management</p>
                </div>
                <ul>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Maximize profitability</li>
                    <li className="list-disc text-sm text-[#333333] ml-10 pt-1">Fostering positive relations with your clients</li>
                </ul>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Culturally Fit</p>
                </div>
                <div className="flex items-center gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]">  Project Management</p>
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <FaCheck />
                    <p className="text-sm text-[#333]"> Team Management</p>
                </div>
                <div className="flex items-start gap-3 pt-4 pb-12">
                    <FaCheck />
                    <p className="text-sm text-[#333]">Experience working with US Digital Marketing Agencies</p>
                </div>

                <div className="flex items-center justify-center mt-8 mb-4 ">
                    <button className="px-7 py-2.5 absolute bottom-10 shadow-sm rounded-full bg-mainGreen text-white font-semibold hover:scale-110 hover:bg-black transition duration-300"><Link to="video-editor">Get Started</Link></button>
                </div>
            </div>
            {/* 4th card end */}
        </div>

    )
}

export default PricongCard
