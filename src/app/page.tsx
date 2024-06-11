import React from "react";
import ScoreBoard from "@/components/ScoreBoard";


export default function Home() {
    return (
        <main className="flex flex-col items-center md:p-12 font-mono text-xl">
            <ScoreBoard/>
        </main>
    )
}
