import ScoreBoard from "@/components/ScoreBoard";
import {JSX} from "react";

export default function Home(): JSX.Element {
    return (
        <main className="text:7xl md:text:6xl">
            <ScoreBoard/>
        </main>
    );
}
