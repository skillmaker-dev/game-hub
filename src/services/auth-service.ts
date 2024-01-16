import axios from "axios";

const axiosAuth = axios.create({
    baseURL: 'https://localhost:7023/'
})
export interface SignIn_SignUp {
    email: string,
    password: string
}

export interface AuthResponse {
    success: boolean,
    errors: string[] | null,
    status: number | null
}

interface ServerApiResponse {
    type: string;
    title: string;
    status: number;
    detail: string | null
    errors: {
        [key: string]: string[];
    } | null
}

class AuthService {
    SignIn = (model: SignIn_SignUp): Promise<AuthResponse> => {
        return axiosAuth.post("login", model)
            .then((resp) => {
                // Handle successful response
                return { success: true, errors: null, status: resp.status } as AuthResponse;
            })
            .catch(error => {
                // Handle error
                return { success: false, errors: error.response.data.title, status: error.response.status } as AuthResponse;
            });
    }

    SignUp = (model: SignIn_SignUp): Promise<AuthResponse> => {
        return axiosAuth.post("register", model)
            .then((resp) => {
                // Handle successful response
                return { success: true, errors: null, status: resp.status } as AuthResponse;
            })
            .catch(error => {
                // Handle error
                if (error.response && error.response.data && error.response.data.errors) {
                    const serverResp: ServerApiResponse = error.response.data
                    const validationErrors = serverResp.errors;
                    if (!validationErrors)
                        return { success: false, errors: ["An error occured"], status: error.response.status } as AuthResponse;
                    const errorMessages = Object.values(validationErrors)
                        .map(messages => messages.join(', '));


                    return { success: false, errors: errorMessages, status: error.response.status } as AuthResponse;
                } else {
                    return { success: false, errors: ['An error occurred'], status: error.response?.status } as AuthResponse;
                }
            });
    }
}

export default AuthService