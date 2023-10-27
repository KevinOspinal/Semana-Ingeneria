import axios from "axios";

export const registerRequest = async (user) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register', user);
        return response; // Retorna la respuesta de la solicitud axios
    } catch (error) {
        throw error; // Si ocurre un error, lánzalo para que puedas manejarlo en el componente React
    }
}