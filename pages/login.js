import React from 'react'
import Login from "../Authentication/Login"
import ProtectedRoute from '../components/ProtectedRoute'

const login = () => {
    return (
        <ProtectedRoute state="login">
            <Login />
        </ProtectedRoute>
    )
}

export default login