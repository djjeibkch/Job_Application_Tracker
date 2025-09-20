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

const getUser = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    try {
    const response = await request;
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

const updateUser = async (id, changes)  => {
    const request = axios.patch(`${baseUrl}/${id}`, changes)
    try {
    const response = await request;
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

const deleteUser = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    try {
    const response = await request;
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}
const getAllUsers = async () => {
    const request = axios.get(baseUrl)
    try {
    const response = await request;
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

export default { getUser, updateUser, deleteUser, getAllUsers }
