interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

export default AuthState;