import {PlayerData} from "./Player";
import PlayerList from "./PlayerList";


export interface ScoreCardProps {
    players: PlayerData[];
}

const ScoreCard = (players: ScoreCardProps) => {


    return (
        <PlayerList players={players.players}/>
    )
}

export default ScoreCard
