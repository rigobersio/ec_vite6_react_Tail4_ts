import axios from 'axios';

// Obtenemos la URL del backend desde las variables de entorno
const baseURL: string = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const instanceAxios = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

export default instanceAxios;
