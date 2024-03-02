import { Link } from 'react-router-dom'
import Image from "../../src/assets/whyChoose.png"

function WhyChooseSection() {
    return (
        <div className='bg-[#f9f9f9] px-[5%] md:px-[7%] py-8 pt-20'>
            <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-6">
                {/* left section */}
                <div className="w-full md:w-1/2 space-y-3 text-[#333]">
                    <h3 className="text-[22px]">Why Hire for these Roles?</h3>
                    <h1 className="text-[32px] font-bold">Grow Your Marketing Agency With The <span className='text-mainGreen'>Right Hires</span></h1>
                    <p className="text-[#333]">Finding the perfect team for your digital marketing agency shouldn’t be a struggle. Hiring the wrong person can be expensive and slow down your growth.</p>
                    <h2 className="text-[17px] font-semibold italic">An Average Agency Spends Up to 50% of Its Revenue on Running Pay Roll</h2>
                    <p>Let’s Talk So We Can Show You How You Canspan <span className='font-semibold'> Save Up to 60% on Your Payroll Expenses</span> While Simultaneously Building a <span className='font-semibold'> Mission-Driven Team</span></p>
                    <p>Hire these key roles to move forward:</p>

                    <div className="flex items-center flex-wrap gap-2">
                        <div className='bg-mainGreen text-[16px] text-white text-center p-3 hover:bg-[#05a2c9] transition duration-300 pulse-animation'><Link to="/web-development" className="">Web Development</Link></div>
                        <div className='bg-mainGreen text-[16px] text-white text-center p-3 hover:bg-[#05a2c9] transition duration-300 pulse-animation'><Link to="/e-ccomerce" className="">Eccomerce Services</Link></div>
                        <div className='bg-mainGreen text-[16px] text-white text-center p-3 hover:bg-[#05a2c9] transition duration-300 pulse-animation'><Link to="/graphic-designing" className="">Graphic Designer</Link></div>
                        <div className='bg-mainGreen text-[16px] text-white text-center p-3 hover:bg-[#05a2c9] transition duration-300 pulse-animation'><Link to="/video-editor" className="">Video Editing</Link></div>
                    </div>

                    <p>We provide a <span className='font-bold italic'>no-fuss hiring solution.</span> Get access to trained, effective professionals, ready to jump in and drive results. Skip the trial-and-error of hiring and start building a team that can take your agency to the next level.</p>

                    <p className='font-semibold italic'>Your Guide to Smarter Hiring</p>

                    <p className=''>Discover effective hiring strategies with our free book, <span className='font-bold'>“Hiring Secrets for Digital Marketing Agencies.”</span> Packed with insights from over 14 years of experience, it offers straightforward tips for putting together a strong, efficient team. This guide is your key to avoiding common hiring pitfalls and setting up your agency for success.</p>

                    <button className='py-2 px-6 text-white bg-mainGreen rounded-full text-base font-bold hover:scale-110 transition-all duration-300'>Grab A Free Copy!</button>
                </div>

                {/* right section */}

                <div className="w-full md:w-1/2">
                    <img className='w-full' src={Image} alt="Why Choose us" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseSection
