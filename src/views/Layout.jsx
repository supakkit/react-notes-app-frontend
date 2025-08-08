import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";


export function Layout() {
    return (
        <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Outlet />
        </div>
    );
}