import { create } from 'zustand';

interface AuthState {
    isUserLoggedIn: boolean;
    loginUser: () => void;
    logoutUser: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isUserLoggedIn: false,
    loginUser: () => {
        set({ isUserLoggedIn: true });
        localStorage.setItem('userLoginState', JSON.stringify(true));
    },
    logoutUser: () => {
        set({ isUserLoggedIn: false });
        localStorage.removeItem('userLoginState');
    },
}));

// Initialize the state based on local storage
const storedUserLoginState = localStorage.getItem('userLoginState');
if (storedUserLoginState) {
    useAuthStore.setState((state) => ({ ...state, isUserLoggedIn: JSON.parse(storedUserLoginState) }));
}

export default useAuthStore;
