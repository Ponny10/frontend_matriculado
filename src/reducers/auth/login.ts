import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState: _LoginState = {
    isAuthenticated: false,
    user: {
        asignaturas: [],
        email: '',
        nombre: '',
        pass: '',
        usuario: '',
    }
}

export const loginSlice = createSlice({
    initialState,
    name: 'login',
    reducers: {
        setLogin: (state: _LoginState, action: PayloadAction<_ResponseApi<_ResponseApiLogin>>) => {
            state.isAuthenticated = true;
            state.user = {
                email: action.payload.data.email,
                nombre: action.payload.data.nombre,
                pass: action.payload.data.pass,
                usuario: action.payload.data.usuario,
            };
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        signIn: (state: _LoginState, action: PayloadAction<_LoginProps>): void => undefined,
    }
});

export const actionsTypes = loginSlice.actions;

export default loginSlice.reducer;

