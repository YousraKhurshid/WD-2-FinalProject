import React, { useContext } from 'react';
import Admin from './Admin';
import Vender from './Vender';
import User from './User';
import Guest from './Guest';
import { GlobalContext } from './LoginContext/context';

export default function Layout({ children }) {
    const { state, dispatch } = useContext(GlobalContext);

    console.log(state);

    // Determine the role or default to 'guest'
    const role = state.user?.role || 'guest';

    // Render the appropriate component based on the role
    let mainComponent;
    switch (role) {
        case 'admin':
            mainComponent = <Admin />;
            break;
        case 'vender':
            mainComponent = <Vender />;
            break;
        case 'user':
            mainComponent = <User />;
            break;
        default:
            mainComponent = <Guest />;
            break;
    }

    return (
        <>
            {mainComponent}
            {children}
            <footer className='bg-slate-100 text-center py-3 text-sm font-semibold text-slate-500'>All Rights Reserved</footer>
        </>
    );
}
