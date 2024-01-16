import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoginState = localStorage.getItem('userLoginState');
        if (storedUserLoginState) {
            setIsUserLoggedIn(JSON.parse(storedUserLoginState));
        }
    }, []);

    const loginUser = () => {
        setIsUserLoggedIn(true);
        localStorage.setItem('userLoginState', JSON.stringify(true));
    };

    const logoutUser = () => {
        setIsUserLoggedIn(false);
        localStorage.removeItem('userLoginState');
    };

    return {
        isUserLoggedIn,
        loginUser,
        logoutUser,
    };
};

export default useAuth;
