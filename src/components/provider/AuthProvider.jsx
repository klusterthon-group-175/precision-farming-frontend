// AuthProvider.js
import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem('accessToken') || null;
    });

    const [refreshToken, setRefreshToken] = useState(() => {
        return localStorage.getItem('refreshToken') || null;
    });

    useEffect(() => {
        const updateAxiosHeaders = () => {
            if (accessToken) {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${accessToken}`;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            } else {
                delete axios.defaults.headers.common['Authorization'];
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        };

        updateAxiosHeaders();

        return () => {
            delete axios.defaults.headers.common['Authorization'];
        };
    }, [accessToken, refreshToken]);

    const contextValue = useMemo(
        () => ({ accessToken, setAccessToken, refreshToken, setRefreshToken }),
        [accessToken, refreshToken]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
