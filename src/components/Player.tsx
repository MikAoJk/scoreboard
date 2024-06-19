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
        <ul className="mt-2 flex justify-center border-solidborder-white border-8">
            <li>{playerProps.playerData.name}</li>
            <li className="mx-8">{playerScore}</li>
            <li className="mx-2"><ChangePlayerScore onAddChangePlayerScore={addPlayerScoreHandler}
                                                    onSubstractChangePlayerScore={substractPlayerScoreHandler}/></li>
            <li className="ml-8">
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
