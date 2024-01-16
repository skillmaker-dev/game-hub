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
    error: string | null,
    status: number | null
}

class AuthService {
    SignIn = (model: SignIn_SignUp): Promise<AuthResponse> => {
        return axiosAuth.post("login", model)
            .then((resp) => {
                // Handle successful response
                return { success: true, error: null, status: resp.status } as AuthResponse;
            })
            .catch(error => {
                // Handle error
                return { success: false, error: error.response.data.title, status: error.response.status || 'An error occurred' } as AuthResponse;
            });
    }

    SignUp = (model: SignIn_SignUp): Promise<AuthResponse> => {
        return axiosAuth.post("register", model)
            .then((resp) => {
                // Handle successful response
                return { success: true, error: null, status: resp.status } as AuthResponse;
            })
            .catch(error => {
                // Handle error
                return { success: false, error: error.response.data.title, status: error.response.status || 'An error occurred' } as AuthResponse;
            });
    }
}

export default AuthService