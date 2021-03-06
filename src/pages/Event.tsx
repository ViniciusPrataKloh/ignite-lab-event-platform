import { useParams } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Player } from "../components/player/Player";
import { Sidebar } from "../components/sidebar/Sidebar";

export function Event() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex flex-1 ">
                {slug
                    ? <Player lessonSlug={slug} />
                    : <div className="flex-1"></div>}
                <Sidebar />
            </main>
        </div>
    );
}