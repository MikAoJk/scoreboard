import ChangePlayerScore from "./ChangePlayerScore";
import React from "react";


interface PlayerProps {
    playerData: PlayerData;
    onSaveRemovePlayer: (playerId: number) => void;
    onChangSubstractPlayerScore: (playerId: number, playerScore: number) => void;
    onChangAddPlayerScore: (playerId: number, playerScore: number) => void;
}

const Player = (playerProps: PlayerProps) => {

    const addPlayerScoreHandler = (playerScore: number) => {
        playerProps.onChangAddPlayerScore(playerProps.playerData.id, playerScore)
    }

    const substractPlayerScoreHandler = (playerScore: number) => {
        playerProps.onChangSubstractPlayerScore(playerProps.playerData.id, playerScore)
    }

    const onSaveRemovePlayerHandler = () => {
        playerProps.onSaveRemovePlayer(playerProps.playerData.id)
    }

    return (
        <ul className="mt-3 grid grid-cols-2 items-center gap-y-3 rounded-lg border border-slate-300 bg-white/70 px-2 py-2 shadow-sm md:flex dark:border-slate-700 dark:bg-slate-900/70">
            <li className="ml-2 min-w-0 break-words text-left font-medium text-slate-900 md:w-1/6 dark:text-slate-100">{playerProps.playerData.name}</li>
            <li className="min-w-0 break-words text-right font-semibold text-slate-900 md:w-1/5 md:text-center dark:text-slate-100">{playerProps.playerData.score}</li>
            <li className="md:w-1/3"><ChangePlayerScore onAddChangePlayerScore={addPlayerScoreHandler}
                                                     onSubstractChangePlayerScore={substractPlayerScoreHandler}/></li>
            <li className="text-right mr-2 md:w-1/3">
                <button onClick={onSaveRemovePlayerHandler} type="button" className="rounded bg-red-700 px-2 py-2 font-bold text-white">Remove
                </button>
            </li>
        </ul>
    )
}

export type PlayerData = {
    id: number,
    name: string
    score: number
}

export default Player
