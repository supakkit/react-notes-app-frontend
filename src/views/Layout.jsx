import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { DevNavbar } from "../components/DevNavbar";


export function Layout() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <Navbar />
            <div className="max-w-5xl p-4">
                <Outlet />
            </div>
            <DevNavbar />
        </div>
    );
}
