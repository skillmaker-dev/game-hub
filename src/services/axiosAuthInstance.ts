import axios from "axios";



export const axiosAuth = axios.create({
    baseURL: 'https://localhost:7023/',
    withCredentials: true
})


