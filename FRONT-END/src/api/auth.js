import axios from "axios";

export const registerRequest = (user) => axios.post('http://localhost:3000/api/register', user);

export const loginRequest = (user) => axios.post('http://localhost:3000/api/login', user);