import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button'
import { Badge } from "@/components/ui/badge"
import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import { NoteForm } from '../components/NoteForm';

export function Notes() {
    const { noteId } = useParams();
    const { notes, handleEditNote } = useContext(NoteContext);
    
    const note = notes.find(note => note._id == noteId);

    if (!note) {
        return <div>Note not found.</div>
    }

    return (
        <div>
            <div className="p-8 grid gap-2">
                <h2
                    className='font-bold text-2xl'
                >{note.title}</h2>
                <p
                    className='text-sm'
                >{note.content}</p>
                <div className='flex gap-1 flex-wrap'>
                    {note.tags.map((tag, index) => (
                        <Badge
                            key={index}
                            className="bg-blue-200 text-blue-600"
                        >#{tag}</Badge>  
                    ))}    
                </div>
                
                <div className='grid gap-3 mt-4'>
                    <p className="font-bold text-sm">📌 Pinned</p>
                    <NoteForm isEdit={true} noteId={note._id}>
                        <Button onClick={() => handleEditNote(note)} className="w-fit">Edit Note</Button>
                    </NoteForm>
                </div>
                
            </div>
            
        </div>
    );
}