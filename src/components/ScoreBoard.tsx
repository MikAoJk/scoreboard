import './ScoreBoard.css'
import ScoreCard from "./ScoreCard";
import AddPlayer from "./AddPlayer";
import {useState} from "react";
import {PlayerData} from "./Player";
import RemovePlayer from "./RemovePlayer";


const joakim: PlayerData = {
    name: "Joakim",
    score: 0
}

const birgitte: PlayerData = {
    name: "Birgitte",
    score: 0
}


const ScoreBoard = () => {

    const initPlayers =
        [joakim, birgitte]

    const [players, setPlayers] = useState(initPlayers)

    const addPlayerHandler = (player: PlayerData) => {
        setPlayers(prevPlayers => {
            return [player, ...prevPlayers]
        })
    }

    const removePlayerHandler = (playerName: string) => {
        setPlayers(prevPlayers => {
            return prevPlayers.filter((playerData) => playerData.name !== playerName)
        })
    }

    return (
        <div className="scoreboard">
            <h1>ScoreBoard</h1>
            <table>
                <tbody>
                <ScoreCard players={players}/>
                </tbody>
            </table>
            <AddPlayer onChangAddPlayer={addPlayerHandler}/>
            <RemovePlayer onChangRemovePlayer={removePlayerHandler}/>
        </div>
    )
}

export default ScoreBoard