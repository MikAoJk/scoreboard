import Player, {PlayerData} from "@/components/Player";

export interface PlayerProps {
    players: PlayerData[];
}

const PlayerList = (playerProps: PlayerProps) => {

    const playersSortedByScore = playerProps.players.sort((a, b) => b.score - a.score)

    return (
        <div className="mt-30">
            {playersSortedByScore
                .map(player =>
                    <Player playerData={player} key={player.id}
                    />
                )}
        </div>
    )
}

export default PlayerList