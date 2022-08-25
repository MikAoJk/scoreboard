import Player, {PlayerData} from "./Player";
import './PlayerList.css'

export interface PlayerProps {
    players: PlayerData[];
}

const PlayerList = (playerProps: PlayerProps) => {

    const playersSortedByScore = playerProps.players.sort((a, b) => b.score - a.score)

    return (
        <div className="playerlist">
            {playersSortedByScore
                .map(player =>
                    <Player playerData={player}
                    />
                )}
        </div>
    )
}

export default PlayerList