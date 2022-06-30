import React from 'react'
import Signup from '../Authentication/Signup'
import ProtectedRoute from '../components/ProtectedRoute'

const signup = () => {
    return (
        <ProtectedRoute state="signup">
            <Signup />
        </ProtectedRoute>
    )
}

export default signup