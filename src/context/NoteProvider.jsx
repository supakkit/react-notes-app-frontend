import axios from "axios";
import { useEffect, useState } from "react";
import { NoteContext } from "./NoteContext";


export function NoteProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [createNoteForm, setCreateNoteForm] = useState({ title: "", content: "", tags: [] });
    // const [editNoteId, setEditNoteId] = useState(null);
    const [editNoteForm, setEditNoteForm] = useState({ title: "", content: "", tags: [] });

    const defaultForm = { title: "", content: "", tags: [] };
    const BASE_URL = 'http://localhost:3001';
    const NOTES_ENDPOINT = '/notes';
    const URL_NOTES_ENDPOINT = `${BASE_URL}${NOTES_ENDPOINT}`;

    const fetchNotes = async () => {
        setLoading(true);

        try {
            const response = await axios.get(URL_NOTES_ENDPOINT);
            const notes = response.data.notes;
            setNotes(notes);
            // console.log(notes);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    const handleCreateFormChange = (e) => {
        // console.log('value:', e.target.value)
        if (e.target.name === 'tags') {
            setCreateNoteForm({
                ...createNoteForm,
                [e.target.name]: String(e.target.value).trim().split(/[,\s]+/),
            });  
        } else {
            setCreateNoteForm({
                ...createNoteForm,
                [e.target.name]: String(e.target.value),
            });
        }
    };

    const handleCreateFormSave = async () => {
        console.log('handleSave:', createNoteForm);
        try {
            await axios.post(URL_NOTES_ENDPOINT, createNoteForm);
            fetchNotes();
        } catch (err) {
            console.error(err);
        }
        setCreateNoteForm(defaultForm);
    };

    const handleDeleteNote = async (noteId) => {
        if (!window.confirm("Delete this note?")) return;
        try {
            await axios.delete(`${URL_NOTES_ENDPOINT}/${noteId}`);
            setNotes(notes.filter(note => note._id !== noteId));
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditNote = (note) => {
        // setEditNoteId(note._id);
        setEditNoteForm({
            title: note.title,
            content: note.content,
            tags: note.tags.join(', ')
        });
    };

    const handleEditNoteFormChange = (e) => {
        // console.log('value:', e.target.value)
        if (e.target.name === 'tags') {
            setEditNoteForm({
                ...editNoteForm,
                [e.target.name]: String(e.target.value).trim().split(/[,\s]+/),
            });  
        } else {
            setEditNoteForm({
                ...editNoteForm,
                [e.target.name]: String(e.target.value),
            });
        }
    };

    const handleEditNoteFormSave = async (noteId) => {
        // console.log('handleSave:', editNoteForm);
        try {
            await axios.put(`${URL_NOTES_ENDPOINT}/${noteId}`, editNoteForm);
            fetchNotes();
        } catch (err) {
            console.error("Error updating note:", err);
        }
        setCreateNoteForm(defaultForm);
    };




    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <NoteContext.Provider
            value={{
                loading, 
                notes,
                createNoteForm,
                handleCreateFormChange, 
                handleCreateFormSave, 
                handleDeleteNote,
                handleEditNote,
                editNoteForm,
                handleEditNoteFormChange,
                handleEditNoteFormSave,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
}