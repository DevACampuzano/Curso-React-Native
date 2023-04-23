import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

const authInitialState: AuthState = {
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


    useEffect(() => {
        const loadDataAsyncStorage = async () => {
            const data = await AsyncStorage.getItem('authState').then(value => JSON.parse(value!));
            dispatch({type: 'loadDataAsyncStorage', payload: data as AuthState});
        };
        loadDataAsyncStorage();
    }, []);
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
