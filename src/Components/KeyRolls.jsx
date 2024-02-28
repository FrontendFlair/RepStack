import React from 'react'
import KeyRollCard from './KeyRollCard'

function KeyRolls() {
    return (
        <div className='px-[5%] py-6'>
            <h1 className='text-5xl font-bold text-mainGreen text-center'>3 Key Roles to Hire</h1>
            <p className='text-5xl font-semibold pt-2 text-center'>For Your Digital Marketing Agency</p>
            <div className="KeyRollCards gap-3 mt-8 mb-4">
                <KeyRollCard
                    title="Marketing Associates"
                    desc="Activate massive growth with your Marketing Associate! This strategic approach to delegating is the best investment "
                    btnTitle="Hire A Marketing Associate"
                    url="/marketing-associate"
                />
                <KeyRollCard
                    title="Sales Development Reps"
                    desc="Delegate booking appointments and making calls to your Sales Development Rep.  "
                    btnTitle="Hire A Sales Development Rep"
                    url="/sales-development"
                />
                <KeyRollCard
                    title="Account Managers"
                    desc="Our Account Managers are responsible for expanding relationships with new and existing clients."
                    btnTitle="Hire An Account Manager"
                    url="/account-manager"
                />
            </div>
        </div>
    )
}

export default KeyRolls
