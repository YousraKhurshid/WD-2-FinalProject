import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Context/addtoCart/context.jsx';
import ContextProvider from './LoginContext/context.jsx';
// import { createContext } from 'react';

// export const GlobalContext = createContext("Initiak value")
// const contextData = {
//      username : " Yousra Khurshid"
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GlobalContext.Provider value={{contextData}}>

  // </GlobalContext.Provider>
<React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
      <CartContextProvider>
        <App/>
        </CartContextProvider>
        </BrowserRouter>
    </ContextProvider>
</React.StrictMode> )

