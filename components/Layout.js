import { useEffect } from "react"
import Header from "./Header"
import AllUSers from "./AllUSers"
import { useSelector, useDispatch } from "react-redux"
import { userProfile } from "../redux_services/actions/userAction"

const Layout = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.userReducer)

    console.log("profile", state)

    useEffect(() => {
        dispatch(userProfile())
    }, [])

    return (
        <div>
            <Header />
            <AllUSers />
        </div>
    )
}

export default Layout