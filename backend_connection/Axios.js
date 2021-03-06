import axios from "axios"
import { apiUrl } from "./urlConfig"

const Axios = axios.create({
    baseURL: apiUrl, 
    withCredentials: true
})

export default Axios