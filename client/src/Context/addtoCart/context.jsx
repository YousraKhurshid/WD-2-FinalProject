import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const GlobalContext = createContext("Initial Value")
let data = {
    user: {
        name: 'Yousra',
        role: 'user'
    },
    cart:[]

};


export default function CartContextProvider({ children }) { 
    const [state, dispatch] = useReducer(reducer, data);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}
