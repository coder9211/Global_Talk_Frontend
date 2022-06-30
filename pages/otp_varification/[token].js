import React from 'react'
import OtpVarification from '../../Authentication/OtpVarification'
import { useRouter } from 'next/router'
const token = () => { 
    const router = useRouter() 
    console.log(router.query)
    return (
        <div>
            <OtpVarification otpPin={router.query.otp} email={router.query.email}/>
        </div>
    )
}

export default token
