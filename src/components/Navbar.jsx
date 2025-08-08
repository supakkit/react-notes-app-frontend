import { Link } from "react-router-dom";


export function Navbar() {
    return (
        <div className="flex justify-between items-center px-4 h-14 bg-white">
            <Link to="/">📚 RAG Notes</Link>
            <div className="flex gap-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
}