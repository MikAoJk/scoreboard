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
        <ul className="mt-3 flex items-center rounded-lg border border-slate-300 bg-white/70 px-2 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
            <li className="ml-2 w-1/6 text-left font-medium text-slate-900 dark:text-slate-100">{playerProps.playerData.name}</li>
            <li className="w-1/5 font-semibold text-slate-900 dark:text-slate-100">{playerProps.playerData.score}</li>
            <li className="w-1/3"><ChangePlayerScore onAddChangePlayerScore={addPlayerScoreHandler}
                                                     onSubstractChangePlayerScore={substractPlayerScoreHandler}/></li>
            <li className="w-1/3 text-right mr-2">
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
