import { useContext, useState } from "react"
import { NoteContext } from "../context/NoteContext"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"


export function NoteForm({ children, isEdit = false, noteId = null }) {
  const [open, setOpen] = useState(false);
  const { 
    createNoteForm,
    handleCreateFormChange, 
    handleCreateFormSave,
    editNoteForm,
    handleEditNoteFormChange,
    handleEditNoteFormSave,
  } = useContext(NoteContext);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isEdit ? 'Edit the Note' : 'Create a New Note'}</DialogTitle>
            <DialogDescription>
              {isEdit ? 'Edit' : 'Create'} your note here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                name="title" 
                value={isEdit ? editNoteForm.title : createNoteForm.title} 
                onChange={isEdit ? handleEditNoteFormChange : handleCreateFormChange} 
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content" 
                name="content" 
                value={isEdit ? editNoteForm.content : createNoteForm.content} 
                onChange={isEdit ? handleEditNoteFormChange : handleCreateFormChange} 
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tag" 
                name="tags" 
                value={isEdit ? editNoteForm.tags : createNoteForm.tags} 
                onChange={isEdit ? handleEditNoteFormChange : handleCreateFormChange} 
                placeholder="Enter tags separated by commas" 
              />
            </div>
            <div className="flex items-center gap-3">
                <Checkbox id="pinNote" />
                <Label htmlFor="pinNote">Pin this note</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <form onSubmit={(e) => {setOpen(false); e.preventDefault()}}>
            <Button type="submit" onClick={isEdit ? () => handleEditNoteFormSave(noteId) : handleCreateFormSave}>
              {isEdit ? 'Update Note' : 'Create Note'}
            </Button>    
            </form>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
