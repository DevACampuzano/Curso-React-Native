type AuthAction = 
| { type: 'logout' } 
| { type: 'login', payload: LoguinPayload }

type LoguinPayload = {username: string, nombre: string}

export default AuthAction;