import { CreateNote } from "../components/CreateNote";
import { NoteCard } from "../components/NoteCard";
import { Search } from "../components/Search";


export function Dashboard() {
    return (
        <div className="grid gap-2">
            <h2 className="font-bold text-2xl text-center">Welcome, Supakkit Sitthi 👋</h2>
            <Search />
            <CreateNote />
            <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NoteCard isPublic={false} />
                <NoteCard isPublic={false} />
                <NoteCard isPublic={false} />
                <NoteCard isPublic={false} />
                <NoteCard isPublic={false} />
            </div>
        </div>
    );
}

