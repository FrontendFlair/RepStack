import KeyRollCard from './KeyRollCard'

function KeyRolls() {
    return (
        <div className='px-[5%] py-12 pt-20'>
            <h1 className='text-5xl font-bold text-mainGreen text-center'>Key Roles to Hire</h1>
            <p className='text-5xl font-semibold pt-2 text-center'>For Your Digital Marketing Agency</p>
            <div className="KeyRollCards gap-3 mt-8 mb-4">
                <KeyRollCard
                    title="Marketing Associates"
                    desc="Activate massive growth with your Marketing Associate! This strategic approach to delegating is the best investment "
                    btnTitle="Hire A Marketing Associate"
                    url="/virtual-marketing-associate-services"
                />
                <KeyRollCard
                    title="Sales Development Reps"
                    desc="Activate massive growth with your Marketing Associate! This strategic approach to delegating is the best investment "
                    btnTitle="Hire A Sales Development Rep"
                    url="/virtual-sales-development-rep"
                />
                <KeyRollCard
                    title=" Account Managers"
                    desc="Activate massive growth with your Marketing Associate! This strategic approach to delegating is the best investment "
                    btnTitle="Hire An Account Manager"
                    url="/virtual-account-manager-services"
                />
                <KeyRollCard
                    title="Web Development"
                    desc="Activate massive growth with your Marketing Associate! This strategic approach to delegating is the best investment "
                    btnTitle="Hire A Web Developer"
                    url="/web-development"
                />
                <KeyRollCard
                    title="E-commerce Services"
                    desc="Delegate booking appointments and making calls to your Sales Development Rep.  "
                    btnTitle="Hire A Ecommerce Expert"
                    url="/e-ccomerce"
                />
                <KeyRollCard
                    title="Graphic Designing"
                    desc="Our Account Managers are responsible for expanding relationships with new and existing clients."
                    btnTitle="Hire An Graphic Designer"
                    url="/account-manager"
                />
                <KeyRollCard
                    title="Video Editing"
                    desc="Our Account Managers are responsible for expanding relationships with new and existing clients."
                    btnTitle="Hire An Video Editor"
                    url="/account-manager"
                />
            </div>
        </div>
    )
}

export default KeyRolls
