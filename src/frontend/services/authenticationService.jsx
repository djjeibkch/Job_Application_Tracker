/*
POST /register
POST /login
POST /logout
 */
import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL

const register = async newObject => {
    const request = axios.post(`${baseUrl}/register`, newObject)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const login = async newObject => {
    const request = axios.post(`${baseUrl}/login`, newObject)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const logout = async newObject => {
    const request = axios.post(`${baseUrl}/logout`, newObject)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}


export default { register, login, logout }