import { create } from 'zustand';


interface AuthState {
    isUserLoggedIn: boolean;
    loginUser: () => void;
    logoutUser: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    isUserLoggedIn: false,
    loginUser: () => set({ isUserLoggedIn: true }),
    logoutUser: () => set({ isUserLoggedIn: false }),
}));

// Initialize the state based on local storage
const storedUserLoginState = localStorage.getItem('userLoginState');
if (storedUserLoginState) {
    useAuthStore.setState({ isUserLoggedIn: JSON.parse(storedUserLoginState) });
}

export default useAuthStore;
