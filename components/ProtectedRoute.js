import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ProtectedRoute = ({ children, state }) => {
    const router = useRouter()
    const [sendComponent, setSendComponent] = useState(false)

    useEffect(() => {
        const isUserLogin = sessionStorage.getItem("user_status")
        state ? 
        isUserLogin ? router.push("/") : setSendComponent(true) :
        isUserLogin ? setSendComponent(true) : router.push("/login")
    },[])

    if(sendComponent) return children
    
}

export default ProtectedRoute