import {PlayerData} from "./Player";
import PlayerList from "./PlayerList";
import './ScoreCard.css'

const ScoreCard = () => {

    const joakim: PlayerData = {
        name: "Joakim",
        score: 0
    }

    const birgitte: PlayerData = {
        name: "Birgitte",
        score: 0
    }

    const initPlayers =
        [joakim, birgitte]

    return (
        <div className="scorecard">
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <PlayerList players={initPlayers}/>
        </div>
    )
}

export default ScoreCard