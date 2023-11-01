import { createContext, useContext, useState, useEffect } from 'react';
import { registerRequest, loginRequest } from "../api/auth.js";
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

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setuser(res.data);
            setIsAuthenticated(user);
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
                text: 'Hubo un error al registrarse. Por favor, inténtelo de nuevo más tarde.',
            });
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAuthenticatedLogin(res.data);
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
                text: 'Hubo un error al iniciar sesión. Por favor, verifique sus credenciales e inténtelo de nuevo.',
            });
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            isAuthenticatedLogin,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
