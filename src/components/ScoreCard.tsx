import {PlayerData} from "./Player";
import PlayerList from "./PlayerList";


export interface ScoreCardProps {
    onChangRemovePlayer: (action: string) => void;
    players: PlayerData[];
}

const ScoreCard = (players: ScoreCardProps) => {


    return (
        <PlayerList players={players.players} onChangRemovePlayer={players.onChangRemovePlayer}/>
    )
}

export default ScoreCard
