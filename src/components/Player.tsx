import ChangePlayerScore from "./ChangePlayerScore";
import React, {useState} from "react";


interface PlayerProps {
    playerData: PlayerData;
    onSaveRemovePlayer: (action: string) => void;
}

const Player = (playerProps: PlayerProps) => {

    const [playerScore, setPlayerScore] = useState(playerProps.playerData.score)

    const addPlayerScoreHandler = (playerScore: number) => {
        setPlayerScore(prevPlayerScore => {
            return prevPlayerScore + playerScore
        })
    }

    const onSaveRemovePlayerHandler = () => {
        playerProps.onSaveRemovePlayer(playerProps.playerData.name)
    }

    return (
        <ul className="mt-2">
            <li>{playerProps.playerData.name}</li>
            <li>{playerScore}</li>
            <li><ChangePlayerScore onChangePlayerScore={addPlayerScoreHandler}/></li>
            <li>
                <button onClick={onSaveRemovePlayerHandler} type="button" className="bg-red-700">Remove
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
