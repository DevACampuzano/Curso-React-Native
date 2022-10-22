import { useReducer, useEffect } from 'react';
import AuthState from '../interfaces/AuthState'
import AuthAction from '../actions/AuthAction'

const inicialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const autReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username,
            }

        default:
            return state;
    }
}

const Login = () => {
    const [{ validando, token, nombre }, dispatch] = useReducer(autReducer, inicialState);
    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Andres',
                username: 'Andres Campu',
            }
        })
    };
    const logout = () => {
        dispatch({
            type: 'logout'
        })
    };

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    Validando...
                </div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
                (token)
                    ? <div className='alert alert-success'> Autenticado como: {nombre} </div>
                    : <div className='alert alert-danger'> No autenticado </div>
            }

            {
                (token)
                    ? <button className='btn btn-danger mb-2' onClick={logout}>Logout</button>
                    : <button className='btn btn-primary mb-2' onClick={login}> Login </button>
            }



        </>
    )
}

export default Login
