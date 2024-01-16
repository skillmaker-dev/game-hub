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

interface ValidationErrorResponse {
    type: string;
    title: string;
    status: number;
    errors: {
        [key: string]: string[];
    };
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
                if (error.response && error.response.data && error.response.data.errors) {
                    const serverResp: ValidationErrorResponse = error.response.data
                    const validationErrors = serverResp.errors;

                    // Extract and join only the error messages with line breaks
                    const errorMessages = Object.values(validationErrors)
                        .map(messages => messages.join(', '))
                        .join('\n');

                    return { success: false, error: errorMessages, status: error.response.status || 'An error occurred' } as AuthResponse;
                } else {
                    return { success: false, error: error.response?.data.title || 'An error occurred', status: error.response?.status || 'An error occurred' } as AuthResponse;
                }
            });
    }
}

export default AuthService