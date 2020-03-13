import React, { useState } from 'react'
import { whatchUserChanges } from '../services'

export const AuthContext = React.createContext()


export default function AuthContextProvider(props) {
    const [state, setState] = useState({
        isLoggedIn: false,
        user: null,
        authReady:false
    })

    useState(() => {
        whatchUserChanges((user) => {
            if (user) {
                setState({
                    isLoggedIn: true,
                    user: user,
                    authReady:true
                })
            } else {
                setState({
                    isLoggedIn: false,
                    user: null,
                    authReady:true
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}