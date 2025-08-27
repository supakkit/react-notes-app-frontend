import { Link } from "react-router-dom";



export function DevNavbar() {
    return (
        <div className="flex gap-2 items-center h-8 w-full px-4 bg-black text-white fixed bottom-0 left-0">
            <h2>Dev Navbar:</h2>
            <Link to="/dashboard" className="bg-red-800 px-1 rounded-md">Dashboard</Link>
            <Link to="/profile" className="bg-red-800 px-1 rounded-md">Profile</Link>
        </div>
    );
}