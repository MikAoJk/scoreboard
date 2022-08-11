import {PlayerProps} from "./Player";
import PlayerList from "./PlayerList";
import './PlayerCard.css'

const PlayerCard = () => {

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
        <div className="playercard">
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th></th>
            </tr>
            <PlayerList players={dummyPlayers}/>
        </div>
    )
}

export default PlayerCard