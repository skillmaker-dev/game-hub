import axios from "axios";
import router from "../routes";

export const axiosInstance = axios.create({
    baseURL: 'https://localhost:7023/api'
})

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Check if the error is due to unauthorized access (HTTP 401) and redirect to Login page
        if (error.response && error.response.status === 401) {
            router.navigate("login")
        }

        return Promise.reject(error);
    }
);