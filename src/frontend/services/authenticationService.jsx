/*
POST /register
POST /login
POST /logout
 */
import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL

const register = newObject => {
    const request = axios.post(`${baseUrl}/register`, newObject)
    return request.then(response => response.data).catch(error => console.error(error));
}

const login = newObject => {
    const request = axios.post(`${baseUrl}/login`, newObject)
    return request.then(response => response.data).catch(error => console.error(error));
}

const logout = newObject => {
    const request = axios.post(`${baseUrl}/logout`, newObject)
    return request.then(response => response.data).catch(error => console.error(error));
}


export default { register, login, logout }