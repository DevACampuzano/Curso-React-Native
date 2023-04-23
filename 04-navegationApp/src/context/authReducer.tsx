import { AuthState } from './AuthContexts';

type AuthAction =
    | { type: 'singIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUserName', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'singIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yen',
            };
        case 'logout':
            return {
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'changeUserName':
            return {
                ...state,
                username: action.payload,
            };
        default:
            return (state);
    }
};
