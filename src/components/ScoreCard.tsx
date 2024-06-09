import {PlayerData} from "./Player";
import PlayerList from "./PlayerList";


export interface ScoreCardProps {
    players: PlayerData[];
}

const ScoreCard = (players :ScoreCardProps) => {


    return (
        <div className="scorecard">
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <PlayerList players={players.players}/>
        </div>
    )
}

export default ScoreCard
