import {jwtDecode} from 'jwt-decode'; // corrected import statement
import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie";

export const GlobalContext = createContext("Initial Value");

const DecodeUser = (jwt_token) => {
    try {
        if (!jwt_token) {
            return null;
        } else {
            const decodedToken = jwtDecode(jwt_token);
            console.log('Decoded Token:', decodedToken); 
            return decodedToken;
        }
    } catch (error) {
        return null;
    }
};

let data = {
    user: DecodeUser(Cookies.get('token')),
    token: Cookies.get('token') || undefined,
    cart:[]
};

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        if (state.user && state.user.token) {
            Cookies.set('token', state.user.token); 
        }
    }, [state.user]); 

    useEffect(() => {
        Cookies.set('token', state.token)
    }, [state.token]); 

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
