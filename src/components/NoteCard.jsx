import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import { NoteForm } from "./NoteForm";


export function NoteCard({ isPublic, note }) {
  const navigate = useNavigate();
  const { handleDeleteNote, handleEditNote } = useContext(NoteContext);

  const createdAt = (new Date(note.createdAt)).toLocaleDateString();

  const handleViewDetails = (noteId) => {
    navigate(`/notes/${noteId}`);
  };
  
  return (
    <Card className="max-w-2xs">
      <CardContent className="grid gap-2">
        {isPublic ? null :
          <p className="font-bold text-sm">📌 Pinned</p>
        }
        <CardTitle className="font-bold text-lg/6">{note.title}</CardTitle>
        <CardDescription className="line-clamp-4 text-pretty">
          {note.content}
        </CardDescription>
        <div className="flex gap-1 flex-wrap">
          {note.tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-blue-200 text-blue-600"
            >#{tag}</Badge>  
          ))}  
        </div>
        
      </CardContent>
      {isPublic ? null :
        <CardFooter>
          <CardDescription className="w-full flex justify-between items-center gap-2 text-xs">
              <p className="mr-2">Created on: {createdAt}</p>
              <button onClick={() => handleViewDetails(note._id)} className="block text-blue-500 text-wrap underline-offset-4 hover:underline">View</button>
              <NoteForm isEdit={true} noteId={note._id}>
                <button onClick={() => handleEditNote(note)} className="block text-green-500 underline-offset-4 hover:underline">Edit</button>
              </NoteForm>
              <button onClick={() => handleDeleteNote(note._id)} className="block text-red-500 underline-offset-4 hover:underline">Delete</button>
              <button className="block text-yellow-500 underline-offset-4 hover:underline">Publish</button>
          </CardDescription>
        </CardFooter>
      }
      
    </Card>
  )
}
