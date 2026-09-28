import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Header from "@/components/layout/Header/Header";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-wrapper">

                <Header />

                <main className="main-content">
                    <Dashboard />
                </main>

            </div>

        </div>
    );
}