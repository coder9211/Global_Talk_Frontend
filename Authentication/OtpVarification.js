import React, { useEffect } from "react";
import Styles from "../styles/OtpVarification.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userOtp } from "../redux_services/actions/userAction"
import { useRouter } from "next/router"

const OtpVarification = ({ otpPin, email }) => {

    const state = useSelector((state) => state?.userReducer);
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if (state?.userVarified === true) {
            sessionStorage.setItem("user_status", 'login')
            router.push("/")
        }
    }, [state?.userVarified])

    if (otpPin && email) {
        const otp = otpPin.split("")

        const otpSubmit = (e) => {
            e.preventDefault();
            dispatch(userOtp(otp.join(''), email))
        }

        return (
            <div className={Styles.otp_main_box}>
                <form onSubmit={otpSubmit}>
                    <div className={Styles.otp_input_box}>
                        <input type={"text"} required value={otp[0]} readOnly />
                        <input type={"text"} required value={otp[1]} readOnly />
                        <input type={"text"} required value={otp[2]} readOnly />
                        <input type={"text"} required value={otp[3]} readOnly />
                    </div>
                    <div className={Styles.otp_button_box}>
                        <button type={"submit"}>Send Otp</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default OtpVarification;
