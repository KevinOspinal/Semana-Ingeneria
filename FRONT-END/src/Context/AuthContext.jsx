import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest, verityTokenRequet, profile } from "../api/auth.js";
import Cookies from 'js-cookie';
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
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState([]);
    const [isAuthenticatedLogin, setIsAuthenticatedLogin] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    // Función para guardar los datos del usuario en localStorage
    const saveUserToLocalStorage = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
    }

    // Función para cargar los datos del usuario desde localStorage
    const loadUserFromLocalStorage = () => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }

    const getProfile = async () => {
        try {
            const res = await profile();
            if (res.data) {
                setUser(res.data);
                saveUserToLocalStorage(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            saveUserToLocalStorage(res.data);
            setIsAuthenticated(user);
            setIsLogin(true);
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
            setIsLogin(true);
            setUser(res.data);
            saveUserToLocalStorage(res.data);
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
                text: `Hubo un error al iniciar sesión. ${error.response.data}`,
            });
        }
    }

    const logout = () => {
        Cookies.remove('token');
        setIsLogin(false);
        setUser(null);
        localStorage.removeItem('user');
    }

    useEffect(() => {
        loadUserFromLocalStorage();
    }, []);

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
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsLogin(false);
                setLoading(false);
                setIsAuthenticatedLogin([]);
                setUser(null);
                return;
            }

            try {
                const res = await verityTokenRequet(cookies.token);
                if (!res.data) {
                    setIsLogin(false);
                    setLoading(false);
                    return;
                }

                setIsLogin(true);
                setIsAuthenticatedLogin(res.data);
                getProfile();
                setLoading(false);
            } catch (error) {
                setIsLogin(false);
                setIsAuthenticatedLogin([]);
                setUser(null);
                setLoading(false);
            }
        }

        checkLogin();
    }, []);

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
