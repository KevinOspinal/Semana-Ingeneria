import { createContext, useContext, useState } from 'react'
import { registerRequest, loginRequest } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState([])
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setuser(res.data)
            setIsAuthenticated(user)
        } catch (error) {
            //console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    }
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}