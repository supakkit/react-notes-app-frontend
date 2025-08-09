import { AskForm } from "../components/AskForm";
import { NoteCard } from "../components/NoteCard";


export function Profile() {
    return (
        <div className="grid gap-2">
            <h2
                className="font-bold text-2xl"
            >Supakkit Sitthi's Public Profile</h2>
            <p
                className="text-sm"
            >Email: example@email.com</p>
            <div className="py-4">
                <AskForm />
            </div>
            <h3
                className="font-bold text-lg"
            >Public Notes</h3>
            <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NoteCard isPublic={true} />
                <NoteCard isPublic={true} />
                <NoteCard isPublic={true} />
                <NoteCard isPublic={true} />
                <NoteCard isPublic={true} />
            </div>
        </div>
    );
}