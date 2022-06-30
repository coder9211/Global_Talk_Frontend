import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import Styles from "../styles/AllUsers.module.css";
import Axios from "../backend_connection/Axios"
import ChatSection from "./ChatSection"
import { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"

const AllUSers = () => {

    const [message, setMessage] = useState(true)
    const [findUser, setFindUser] = useState()
    const [connect, setConnect] = useState(false)
    const [friendRequest, setFriendRequest] = useState(null)
    const socket = useRef(io("ws://localhost:9000"))
    const user = useSelector(state => state.userReducer)
    // console.log(user)

    useEffect(() => {
        socket.current.emit("friendRequest", friendRequest?._id, user?.userInfo?._id)
        socket.current.on("giveRequest", (data)=>{
            console.log("data",data)
            // setFriendRequest(null)
        })
    },[friendRequest])

    useEffect(()=>{ 
        socket.current.on("welcome", message => console.log(message))
        socket.current.emit("userInfo",user?.userInfo?._id)
    },[user])

    const searchUser = async (e) => {
        if(e.target.value) {
            const res = await Axios.get(`user/search/${e.target.value}/${user.userInfo._id}`)
            setFindUser(res.data.userSearch)
        }else{
            setFindUser([])
        }
    }

    const sendRequest = (user) => {
        console.log(user)
        setFriendRequest(user)
        setConnect(true)
    }


    const unSendRequest = (user) => {
        console.log("unSendRequest")
        // setFriendRequest(user)
        setConnect(false)
    }

    return (
        <div style={{ display: "flex" }}>
            <div className={Styles.all_users_main_box} id={Styles.hide_alluser_div}>
                <h3>Chats</h3>
                <div className={Styles["alluser_search_bar"]}>
                    <input type="text" placeholder="search for users" onChange={searchUser}/>
                    <SearchIcon className={Styles["alluser_search_icon"]} />
                </div>
                {
                    findUser?.length > 0 && 
                    findUser?.map((user,index) => {
                        return (
                            <div key={index}>
                                { user?.fullName }
                                <button onClick={()=>{connect ? unSendRequest(user) : sendRequest(user)}}>{connect ? "Requested" : "Connect"}</button>
                            </div>
                        )
                    })
                }
                <div className={Styles["alluser_avatars"]}>
                    <Avatar src="" style={{ width: '52px', height: "52px", margin: "0px 6px" }} />
                </div>

                <h4>Recents Chats</h4>
                <div className={Styles["alluser_list"]}>
                    <div className={Styles["user_div"]} onClick={() => setMessage(false)}>
                        <Avatar src="" />
                        <div className={Styles["user_name_message"]}>
                            <div className={Styles["user_name"]}>
                                <div className={Styles["user_name_and_online"]}>
                                    <h4>Somyaranjan</h4>
                                    <span>Online</span>
                                </div>
                                <span className={Styles['user_unseen_message']}>5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    message ?
                        <div>
                            Global Talk
                        </div> :
                    <ChatSection />
                }
            </div>
        </div>
    )
}

export default AllUSers 