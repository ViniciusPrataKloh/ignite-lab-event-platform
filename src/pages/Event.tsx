import { Header } from "../components/header/Header";
import { Lesson } from "../components/lesson/Lesson";
import { Player } from "../components/player/Player";
import { Sidebar } from "../components/sidebar/sidebar";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex flex-1 ">
                <Player />
                <Sidebar />
            </main>
        </div>
    );
}