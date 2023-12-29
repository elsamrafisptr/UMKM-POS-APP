import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
            <SideBar />
            <div className="flex-grow md:overflow-y-auto">
                <TopBar></TopBar>
                {children}
            </div>
        </div>
    );
}
