import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";

export default function Layout({ children }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-blue-50">
            <Sidebar></Sidebar>
            <div className="flex-grow md:overflow-y-auto">
                <Topbar></Topbar>
                {children}
            </div>
        </div>
    );
}
