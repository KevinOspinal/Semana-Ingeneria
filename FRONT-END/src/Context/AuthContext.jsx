import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest, verityTokenRequet } from "../api/auth.js";
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState([]);
    const [isAuthenticatedLogin, setIsAuthenticatedLogin] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setuser(res.data);
            setIsAuthenticated(user);
            setIsLogin(true)
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Registro exitoso. ¡Bienvenido!',
            });
        } catch (error) {
            console.error(error);
            setErrors(error.response.data);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Hubo un error al registrarse. ${error.response.data}`,
            });
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticatedLogin(res.data);
            setIsLogin(true)
            setuser(res.data)
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Inicio de sesión exitoso. ¡Bienvenido de nuevo!',
            });
        } catch (error) {
            console.error(error);
            setErrors(error.response.data);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Hubo un error al iniciar sesión. ${error.response.data}` ,
            });
        }
    }

    const logout = () => {

        Cookies.remove('token')
        setIsLogin(false)
        setuser(null)

        useEffect(() => {
            if (errors.length > 0) {
                const timer = setTimeout(() => {
                    setErrors([]);
                }, 10000);
                return () => clearTimeout(timer);
            }
        }, [errors]);

    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsLogin(false)
                setLoading(false);
                setIsAuthenticatedLogin([])
                setuser(null)
                return;
            }
                try {
                    const res = await verityTokenRequet(cookies.token)
                    if (!res.data) {
                        setIsLogin(false);
                        setLoading(false);
                        return;
                    }

                    setIsLogin(true)
                    setIsAuthenticatedLogin(res.data)
                    setLoading(false);
                } catch (error) {
                    setIsLogin(false)
                    setIsAuthenticatedLogin([])
                    setuser(null)
                    setLoading(false);
                }
        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user,
            isAuthenticated,
            isAuthenticatedLogin,
            isLogin,
            loading,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
