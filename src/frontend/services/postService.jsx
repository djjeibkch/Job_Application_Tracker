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

const getAllPosts = async () => {
    const request = axios.get(baseUrl)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const getPost = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const createPost = async newObject => {
    const request = axios.post(baseUrl, newObject)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const updatePost = async (id, newObject) => {
    const request = axios.patch(`${baseUrl}/${id}`, newObject)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const deletePost = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

const uploadImage = async (image) => {
    const request = axios.post(`${import.meta.env.VITE_API_BASE_URL}/upload`, image)
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        return console.error(error);
    }
}

export default { getAllPosts, getPost, createPost, updatePost, deletePost, uploadImage}