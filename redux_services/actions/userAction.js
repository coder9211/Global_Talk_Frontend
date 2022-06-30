import Axios from "../../backend_connection/Axios"
import { useEffect } from "react"
import { 
    userSignupConstant, 
    userOtpConstant, 
    userLoginConstant, 
    userProfileConstant,
    userLogoutConstant
} from "./constant"

export const userSignup = (data) => {
    console.log("action", data)
    return async dispatch => {
        try {
            const res = await Axios.post("user/signup", data)
            console.log(res)
            dispatch({
                type: userSignupConstant.USER_SIGNUP_SUCCESS,
                payload: {
                    user: res.data.saveUser,
                    message: res.data.message
                }
            })

        } catch (error) {
            console.log(error)
            error.response &&
                dispatch({
                    type: userSignupConstant.USER_SIGNUP_FAILED,
                    payload: {
                        error: error.response.data
                    }
                })
        }
    }
}

export const userOtp = (otpPin, email) => {
    const data = { otpPin, email }
    return async dispatch => {
        try {
            const res = await Axios.post("user/signup/otp", data)
            console.log(res)
            dispatch({
                type: userOtpConstant.USER_OTP_SUCCESS,
                payload: {
                    message: res.data.message
                }
            })
        } catch (error) {
            error.response &&
                dispatch({
                    type: userOtpConstant.USER_OTP_FAILED,
                    payload: {
                        error: error.response.data
                    }
                })
        }
    }
}

export const userLogin = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            const res = await Axios.post("user/login", data)
            dispatch({
                type: userLoginConstant.USER_LOGIN_SUCCESS,
                payload: {
                    message: res.data.message
                }
            })
        } catch (error) {
            console.log(error)
            error.response &&
                dispatch({
                    type: userLoginConstant.USER_LOGIN_FAILURE,
                    payload: {
                        error: error.response.data
                    }
                })
        }
    }
}

export const userProfile = () => {
    console.log("inside")
    return async dispatch => {
        try {
            const res = await Axios.get("user/profile")
            dispatch({
                type: userProfileConstant.USER_PROFILE_SUCCESS,
                payload: {
                    user: res.data.user
                }
            })
        } catch (error) {
            error.response &&
                dispatch({
                    type: userProfileConstant.USER_PROFILE_FAILURE,
                    payload: {
                        error: error.response.data?.error
                    }
                })
        }
    }
}

export const userLogout = () => {
    return async dispatch => {
        const res = await Axios.post("user/logout")
        dispatch({
            type: userLogoutConstant.USER_LOGOUT_SUCCESS,
            payload: {
                message: res.data.message
            }
        })
    }
}
