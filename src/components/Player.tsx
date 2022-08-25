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
        <div>
            <tr>
                <td>{playerProps.playerData.name}</td>
                <td>{playerScore}</td>
                <td><ChangePlayerScore onChangePlayerScore={addPlayerScoreHandler}/></td>
            </tr>
        </div>
    )
}

export type PlayerData = {
    name: string
    score: number
}

export default Player