import React from 'react'
import { Sidebar } from './components/Sidebar'
import './Layout.css'

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='bg-slate-100 w-screen overflow-y-auto m-10 p-10 rounded-2xl'>
                {children}
            </div>
        </div>
    )
}
