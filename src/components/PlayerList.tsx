import Player, {PlayerData} from "@/components/Player";
import {useState} from "react";

export interface PlayerProps {
    players: PlayerData[];
    onChangRemovePlayer: (playerId: number) => void;
    onChangSubstractPlayerScore: (playerId: number, playerScore: number) => void;
    onChangAddPlayerScore: (playerId: number, playerScore: number) => void;
}

const PlayerList = (playerProps: PlayerProps) => {
    const [sortAscending, setSortAscending] = useState(false)

    const playersSortedByScore = [...playerProps.players].sort((a, b) =>
        sortAscending ? a.score - b.score : b.score - a.score
    )

    return (
        <div className="mt-10">
            <button
                onClick={() => setSortAscending(ascending => !ascending)}
                type="button"
                aria-label={`Sort by player score ${sortAscending ? "ascending" : "descending"}`}
                className="cursor-pointer rounded bg-slate-700 px-4 py-2 font-bold text-white"
            >
                Sort by score: {sortAscending ? "Ascending" : "Descending"}
            </button>
            {playersSortedByScore
                .map(player =>
                    <Player playerData={player} key={player.id}
                            onSaveRemovePlayer={playerProps.onChangRemovePlayer}
                            onChangSubstractPlayerScore={playerProps.onChangSubstractPlayerScore}
                            onChangAddPlayerScore={playerProps.onChangAddPlayerScore}
                    />
                )}
        </div>
    )
}

export default PlayerList
