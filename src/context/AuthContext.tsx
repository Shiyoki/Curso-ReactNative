import React, { createContext, useReducer} from 'react';
import { authReducer } from './authReducer';

// Definir como luce, que inforcacion tendra
export interface AuthState {
    isLoggedIn: boolean;
    username?: string; // ? es opcional
    favoriteIcon?: string; // ? es opcional
}

// Estado inicial

export const authInitialState: AuthState = {    
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
    logout: () => void;
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            changeUsername,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}