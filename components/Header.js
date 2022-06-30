import { useState, useEffect } from 'react'
import Styles from "../styles/Header.module.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../redux_services/actions/userAction"


const Header = () => {
    const [ showProfile, setShowProfile ] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    const state = useSelector(state => state.userReducer)

    console.log(state)

    useEffect(() => {
        if(state.logoutUser) {
            sessionStorage.removeItem("user_status")
            router.push("/login")
        }
    },[state.logoutUser])

    const userLogoutFunc = () =>{
        dispatch(userLogout())
    }

    return (
        <>
            <div className={Styles.header_main_box}>
                <div className={Styles.header_name_box}>
                    <h3>GT</h3>
                    <p><span style={{ fontWeight: '700' }}>Global</span> Talk</p>
                </div>

                <div className={Styles.header_navbar_box}>
                    <button onClick={() => alert("this function is not available right now")}>Invite Friends</button>
                    <NotificationsNoneIcon className={Styles.header_notification_icon} onClick={() => alert("this function is not available right now")} />

                    <div className={Styles.header_my_name_box} onClick={() => setShowProfile(true)}>
                        <Avatar src="" className={Styles.header_profile_icon}/>
                        <h4>Shahnawaz</h4>
                    </div>
                    <button onClick={userLogoutFunc}>logout</button>
                </div>
            </div>
        </>
    )
}

export default Header