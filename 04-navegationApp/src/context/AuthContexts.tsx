import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
};

export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const singIn = () => {
        dispatch({ type: 'singIn' });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const changeUserName = (userName: string) => {
        dispatch({ type: 'changeUserName', payload: userName });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            singIn,
            logout,
            changeFavoriteIcon,
            changeUserName,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
