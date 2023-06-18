import {createContext, useReducer, useEffect} from 'react';
import {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoginData,
  LoginResponse,
  RegisterData,
  Usuario,
} from '../interfaces/appInterfaces';
import {AuthState, authReducer} from './authReducer';
import cafeApi from '../api/cafeApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const authInicialState: AuthState = {
  errorMessage: '',
  status: 'checking',
  token: null,
  user: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const tokenStorage = await AsyncStorage.getItem('token');
    if (!tokenStorage) {
      dispatch({type: 'notAuthenticated'});
    }

    try {
      const resp = await cafeApi.get<LoginResponse>('/auth/');

      if (resp.status !== 200) {
        return dispatch({type: 'notAuthenticated'});
      }
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response);
      } else {
        console.log(typeof error);
        console.log(error);
      }
    }
  };

  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {token, usuario} = await cafeApi
        .post<LoginResponse>('/auth/login', {
          correo,
          password,
        })
        .then(({data}) => data);

      dispatch({
        type: 'signUp',
        payload: {
          token,
          user: usuario,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: 'addError',
          payload: error.response?.data.msg || 'Información incorrecta',
        });
      } else {
        console.log(typeof error);
        console.log(error);
      }
    }
  };

  const signUp = async ({correo, nombre, password}: RegisterData) => {
    try {
      const {token, usuario} = await cafeApi
        .post<LoginResponse>('/usuarios', {
          correo,
          password,
          nombre,
        })
        .then(({data}) => data);

      dispatch({
        type: 'signUp',
        payload: {
          token,
          user: usuario,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({
          type: 'addError',
          payload:
            error.response?.data.errors[0].msg || 'Revise la Información',
        });
      } else {
        console.log(typeof error);
        console.log(error);
      }
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        logOut,
        removeError,
        ...state,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
