import Layout from "../components/Layout"
import { useSelector , useDispatch} from "react-redux"
import ProtectedRoute from "../components/ProtectedRoute"
import { userProfile } from "../redux_services/actions/userAction"
import { useEffect } from "react"

const Home = () => { 
    
    return (
        <ProtectedRoute>
            <Layout />
        </ProtectedRoute>
    )
}

export default Home