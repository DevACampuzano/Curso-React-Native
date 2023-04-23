import { AuthState } from './AuthContexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const singIn = (state: AuthState): AuthState => {
    const data = {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yen',
    };
    AsyncStorage.setItem('authState', JSON.stringify(data));
    return data;
};

const logout = (): AuthState => {
    const data = {
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
    };
    AsyncStorage.removeItem('authState');
    return data;
};

const changeFavIcon = (state: AuthState, payload: string): AuthState => {
    const data = {
        ...state,
        favoriteIcon: payload,
    };
    AsyncStorage.setItem('authState', JSON.stringify(data));
    return data;
};

const changeUserName = (state: AuthState, payload: string): AuthState => {
    const data = {
        ...state,
        username: payload,
    };
    AsyncStorage.setItem('authState', JSON.stringify(data));
    return data;
};

type AuthAction =
    | { type: 'singIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUserName', payload: string }
    | { type: 'loadDataAsyncStorage', payload: AuthState}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'singIn':
            return singIn(state);
        case 'logout':
            return logout();
        case 'changeFavIcon':
            return changeFavIcon(state, action.payload);
        case 'changeUserName':
            return changeUserName(state, action.payload);
        case 'loadDataAsyncStorage':
            return action.payload;
        default:
            return (state);
    }
};
