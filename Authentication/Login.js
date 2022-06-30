import React , { useState, useEffect } from 'react'
import Styles from "../styles/Signup.module.css" 
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../redux_services/actions/userAction"
import { useRouter } from "next/router"

const Login = () => {
    const [ user, setUser ] = useState({ email: "", password: "" })
    const router = useRouter()
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

    console.log(userState.loginSuccess)

    const handleInput = (e) =>{
        e.preventDefault()
        const name = e.target.name 
        const value = e.target.value 
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        if(userState.loginSuccess){
            sessionStorage.setItem("user_status", 'login')
            router.push("/")
        } 
    }, [userState.loginSuccess])

    const submitInput = (e) => {
        e.preventDefault()
        dispatch(userLogin(user))
    }

    return (
        <section id={Styles.contact}>
            <div className={Styles.background}>
                <div className={Styles.f_container}>
                    <div className={Styles.screen}>
                        <div className={Styles.screen_body}>
                            <div className={Styles.screen_body_item + " " + Styles.left}>
                                <div className={Styles.title}>
                                    <span>LOGIN FORM</span>
                                </div>
                                <div className={Styles.contact}>
                                    If you don't have an account <br /> please  
                                    <Link href="/signup"><a>    
                                        <span style={{ color: "red" }}> sign up</span>
                                    </a></Link>
                                </div>
                            </div>
                            <div className={Styles.screen_body_item}>
                                <form action="" className={Styles.form} onSubmit={submitInput} autoComplete="off">
                                    <div className={Styles.form_group}>
                                        <input
                                            type={"email"}
                                            name="email"
                                            onChange={handleInput}
                                            placeholder="Email"
                                            className={Styles.form_control}
                                            required
                                        />
                                    </div>
                                    <div className={Styles.form_group}>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleInput}
                                            placeholder="Password"
                                            className={Styles.form_control}
                                            required
                                        />
                                    </div>

                                    <div className={Styles.form_group + " " + Styles.buttons}>
                                        <button className={Styles.form_button + " " + Styles.mt_3}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login