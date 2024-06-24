import ScoreBoard from "@/components/ScoreBoard";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:text-6xl text:2xl">
            <ScoreBoard/>
        </main>
    );
}
