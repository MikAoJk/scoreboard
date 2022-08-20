import {PlayerProps} from "./Player";
import PlayerList from "./PlayerList";
import './ScoreCard.css'

const ScoreCard = () => {

    const joakim: PlayerProps = {
        name: "Joakim",
        score: 410
    }

    const birgitte: PlayerProps = {
        name: "Birgitte",
        score: 310
    }

    const dummyPlayers =
        [joakim, birgitte]

    return (
        <div className="scorecard">
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <PlayerList players={dummyPlayers}/>
        </div>
    )
}

export default ScoreCard