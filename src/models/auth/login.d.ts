interface _LoginState {
    isAuthenticated: boolean;
    user: _ResponseApiLogin;
}

interface _ResponseApiLogin {
    usuario: string;
    pass: string;
    nombre: string;
    email: string;
    asignaturas?: [];
}

interface _LoginProps {
    Usuario: string;
    Pass: string;
}

interface _AuthState {
    login: _LoginState;
}