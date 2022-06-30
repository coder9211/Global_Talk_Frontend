import {
    userSignupConstant,
    userOtpConstant,
    userLoginConstant,
    userProfileConstant,
    userLogoutConstant
} from "../actions/constant"

const initialState = {
    userInfo: {},
    message: null,
    error: null,
    userVarified: false,
    otpSent: false,
    loginSuccess: false,
    logoutUser: false
}

const userReducer = (state = initialState, action) => {
    console.log("reducers", action)
    switch (action.type) {
        case userSignupConstant.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.user,
                message: action.payload.message,
                error: null,
                otpSent: true
            }

        case userSignupConstant.USER_SIGNUP_FAILED:
            return {
                ...state,
                message: null,
                error: action.payload.error,
                otpSent: false
            }

        case userOtpConstant.USER_OTP_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                userVarified: true
            }

        case userOtpConstant.USER_OTP_FAILED:
            return {
                ...state,
                error: action.payload.message,
                userVarified: false
            }

        case userLoginConstant.USER_LOGIN_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                loginSuccess: true
            }

        case userLoginConstant.USER_LOGIN_FAILED:
            return {
                ...state,
                error: action.payload.error,
                loginSuccess: false
            }

        case userProfileConstant.USER_PROFILE_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.user
            }

        case userProfileConstant.USER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }

        case userLogoutConstant.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                logoutUser: true,
                message: action.payload.message,
                loginSuccess: false
            }

        default:
            return state
    }
}

export default userReducer