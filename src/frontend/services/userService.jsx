/*
{
  “user”: {
    "id": <Integer>,
    “username”: <String>,
    “password”:  <String>
  }
}

GET /users/{id}
PATCH /users/{id}  (User/Admin)
DELETE /users/{id} (Admin)
GET /users (Admin)
*/
import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/users`

const getUser = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data).catch(error => console.error(error));
}

const updateUser = (id, changes)  => {
    const request = axios.patch(`${baseUrl}/${id}`, changes)
    return request.then(response => response.data).catch(error => console.error(error));
}

const deleteUser = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data).catch(error => console.error(error));
}
const getAllUsers = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => console.error(error));
}

export default { getUser, updateUser, deleteUser, getAllUsers }
