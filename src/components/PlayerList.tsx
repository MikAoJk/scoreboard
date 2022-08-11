import {PlayerData} from "./Player";
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
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                        <td><button type="button">Change score</button></td>
                    </tr>
                )}
        </div>
    )
}

export default PlayerList