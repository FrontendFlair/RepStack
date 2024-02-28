import AnimatedButton from "./AnimatedButton"

function Hero() {
    return (
        <div className="min-h-[80vh] px-[5%] py-8 flex justify-center flex-col">
            <div className="space-y-6">
                <h1 className='text-4xl sm:text-5xl md:text-6xl text-mainGreen font-bold'>Build Your Dream Team</h1>
                <p className='text-xl sm:text-2xl font-semibold'>Effortless Recruitment for SAAS & Marketing Agencies</p>
                <AnimatedButton  btnText="Talk to a Recruitment Specialist" />
            </div>
        </div>
    )
}

export default Hero
