import { Link } from "react-router-dom";


export function Home() {
    return (
        <div className="grid min-h-screen">
            <div className="flex flex-col items-center justify-center gap-2 max-w-xl">
                <h2
                    className="font-bold text-3xl text-center"
                >Hassle-free note taking, publish and share your notes with AI summarizer.</h2>
                <p>Please <Link className="text-blue-500">Login</Link> to continue.</p>    
            </div>
            
        </div>
    );
}