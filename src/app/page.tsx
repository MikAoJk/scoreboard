import ScoreBoard from "@/components/ScoreBoard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between text:3xl md:text-6xl">
            <ScoreBoard/>
        </main>
    );
}
