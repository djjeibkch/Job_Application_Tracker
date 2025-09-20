import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
app.use(cors());
const baseUrl = process.env.VITE_API_BASE_URL;
const PORT =  3001;

app.use(express.static(__dirname + '/public'));

function Image(id, country, city, comment = "No Comment", author_id){
    this.id = id;
    this.country = country;
    this.city = city;
    this.comment = comment;
    this.author_id = author_id;
}

let images = [  {    id: "1",    content: "HTML is easy",    important: true  },
    {    id: "2",    content: "Browser can execute only JavaScript",    important: false  },
    {    id: "3",    content: "GET and POST are the most important methods of HTTP protocol",
        important: true  }]

app.get("*", (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/posts', (request, response) => {
    response.json(images)
})

app.get('/posts/:id', (request, response) => {
    const id = request.params.id
    const image = images.find(image => image.id === id)

    if (image) {
        response.json(image)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/posts/:id', (request, response) => {
    const id = request.params.id
    images = images.filter(image => image.id !== id)

    response.status(204).end()
})

app.use(express.json())

const generateId = () => {
    const maxId = images.length > 0
        ? Math.max(...images.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}

app.post('/posts', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const image = {
        content: body.content,
        important: Boolean(body.important) || false,
        id: generateId(),
    }

    images = images.concat(image)

    response.json(image)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})