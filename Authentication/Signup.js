import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from "next/router"
import Styles from "../styles/Signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux_services/actions/userAction";

const Signup = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const state = useSelector((state) => state?.userReducer);
    console.log(state)

    const [user, setUser] = useState({
        fullName: "",
        mobileNo: "",
        email: "",
        userName: "",
        password: "",
    });

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const submitUser = (e) => {
        e.preventDefault();
        dispatch(userSignup(user));
        console.log("DONE!");
    };

    // useEffect(() => {
    //     if(state.otpSent === true){
    //         router.push(`/otp_varification/${token}`)
    //     }
    // },[state?.otpSent === true])

    return (
        <section id={Styles.contact}>
            <div className={Styles.background}>
                <div className={Styles.f_container}>
                    <div className={Styles.screen}>
                        <div className={Styles.screen_body}>
                            <div className={Styles.screen_body_item + " " + Styles.left}>
                                <div className={Styles.title}>
                                    <span>SIGN UP FORM</span>
                                </div>
                                <div className={Styles.contact}>
                                    If you have an account <br /> please 
                                    <Link href="/login"><a>    
                                        <span style={{ color: "red" }}> login</span>
                                    </a></Link>
                                </div>
                            </div>
                            <div className={Styles.screen_body_item}>
                                <form action="" className={Styles.form} onSubmit={submitUser} autoComplete="off">
                                    <div className={Styles.form_group}>
                                        <input
                                            type="text"
                                            name="fullName"
                                            onChange={handleInput}
                                            placeholder="Full Name"
                                            className={Styles.form_control}
                                            required 
                                        />
                                    </div>
                                    <div className={Styles.form_group}>
                                        <input
                                            type="number"
                                            name="mobileNo"
                                            onChange={handleInput}
                                            placeholder="Contact No."
                                            className={Styles.form_control}
                                            required 
                                        />
                                    </div>
                                    <div className={Styles.form_group}>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleInput}
                                            placeholder="Email"
                                            className={Styles.form_control}
                                            required 
                                        />
                                    </div>
                                    <div className={Styles.form_group}>
                                        <input
                                            type="text"
                                            name="userName"
                                            onChange={handleInput}
                                            placeholder="Username"
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
                                            SIGN UP
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
