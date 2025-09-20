/*
{
  “image”: {
    "id": <Integer>,
    “country”: <String>,
    "city": <String>,
    "comment": <String>,
    “author_id”: <Integer>
  }
}

GET /posts
GET /posts/{id}
POST /posts (User/Admin)
PATCH /posts/{id} (User/Admin)
DELETE /posts/{id} (User/Admin)

POST /upload (User/Admin)
GET /images/{id} (served statically instead)
 */
import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/posts`

const getAllPosts = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => console.error(error));
}

const getPost = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data).catch(error => console.error(error));
}

const createPost = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data).catch(error => console.error(error));
}

const updatePost = (id, newObject) => {
    const request = axios.patch(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data).catch(error => console.error(error));
}

const deletePost = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data).catch(error => console.error(error));
}

const uploadImage = (image) => {
    const request = axios.post(`${import.meta.env.VITE_API_BASE_URL}/upload`, image)
    return request.then(response => response.data).catch(error => console.error(error));
}

export default { getAllPosts, getPost, createPost, updatePost, deletePost, uploadImage}