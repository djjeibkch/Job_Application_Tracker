import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')
const [showAll, setShowAll] = useState(true)


useEffect(() => {
basicService.getAll().then((initialNotes) => {
    setNotes(initialNotes)
})
}, [])

const addNote = (event) => {
event.preventDefault()
const noteObject = {
    content: newNote,
    important: Math.random() > 0.5,
}

basicService.create(noteObject).then((returnedNote) => {
    setNotes(notes.concat(returnedNote))
    setNewNote('')
})
}

const toggleImportanceOf = (id) => {
const note = notes.find((n) => n.id === id)
const changedNote = {...note, important: !note.important}

basicService
    .update(id, changedNote)
    .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
    })
    .catch(() => {
        alert(`the note '${note.content}' was already deleted from server`)
        setNotes(notes.filter((n) => n.id !== id))
    })
}

const handleNoteChange = (event) => {
setNewNote(event.target.value)
}

const notesToShow = showAll ? notes : notes.filter((note) => note.important)

return (
    <div>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
        </div>
        <ul>
            {notesToShow.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    toggleImportance={() => toggleImportanceOf(note.id)}
                />
            ))}
        </ul>
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange}/>
            <button type="submit">save</button>
        </form>
    </div>
)

const Home = () => {
    return (
        <>
            <h1>Home</h1>

        </>

    );
};

export default Home;
