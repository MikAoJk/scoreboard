import React from "react";
import ScoreBoard from "@/components/ScoreBoard";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-12 font-mono">
            <ScoreBoard/>
        </main>
    )
}
