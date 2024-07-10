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

    const substractPlayerScoreHandler = (playerScore: number) => {
        setPlayerScore(prevPlayerScore => {
            return prevPlayerScore - playerScore
        })
    }

    const onSaveRemovePlayerHandler = () => {
        playerProps.onSaveRemovePlayer(playerProps.playerData.name)
    }

    return (
        <ul className="mt-4 flex">
            <li className="w-1/5">{playerProps.playerData.name}</li>
            <li className="w-1/5">{playerScore}</li>
            <li className="w-1/5"><ChangePlayerScore onAddChangePlayerScore={addPlayerScoreHandler}
                                                    onSubstractChangePlayerScore={substractPlayerScoreHandler}/></li>
            <li className="w-1/5">
                <button onClick={onSaveRemovePlayerHandler} type="button" className="bg-red-700 rounded">Remove
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
