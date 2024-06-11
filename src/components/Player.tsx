import ChangePlayerScore from "./ChangePlayerScore";
import {useState} from "react";


interface PlayerProps {
    playerData: PlayerData
}

const Player = (playerProps: PlayerProps) => {

    const [playerScore, setPlayerScore] = useState(playerProps.playerData.score)

    const addPlayerScoreHandler = (playerScore: number) => {
        setPlayerScore(prevPlayerScore => {
            return prevPlayerScore + playerScore
        })
    }

    return (
            <li>{playerProps.playerData.name}</li>
            <li>{playerScore}</li>
            <li><ChangePlayerScore onChangePlayerScore={addPlayerScoreHandler}/></li>
    )
}

export type PlayerData = {
    id: number,
    name: string
    score: number
}

export default Player
