import { AuthClient } from "../client/AuthClient";
import { Credentials } from "../client/types/Credentials";
import { createContext, useContext, useState } from "react";
import { User } from "../client/types/User"
import * as jose from 'jose'

export interface AuthContext {
    signIn: (credentials: Credentials) => void;
    signOut: () => void;
    isAuthenticated: () => boolean
    user: User;
}

const authClient = new AuthClient()

const AuthContext = createContext<AuthContext | null>(null)

const AuthProvider = ({ children }: any) => {

    const storedToken = localStorage.getItem('token') === 'undefined' ? '' : localStorage.getItem('token')
    const [user, setUser] = useState<User>({ token: storedToken ?? ''})

    const isAuthenticated = (): boolean => {
        try {
            if (!user.token) return false
            const { exp } = jose.decodeJwt(user.token)
            if (!exp) return false
            if (Date.now() >= exp * 1000) return false
        } catch (err) {
            localStorage.setItem('token', '')
        }

        return true
    }

    const signIn = async (credentials: Credentials) => {
        const { access_token: token } = await authClient.signIn(credentials)
        localStorage.setItem('token', token)
        setUser(_ => ({ token }))
    }

    const signOut = () => {
        localStorage.setItem('token', '')
        setUser(_ => ({ token: '' }))
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}


export default AuthProvider