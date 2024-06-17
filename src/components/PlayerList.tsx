import Player, {PlayerData} from "@/components/Player";

export interface PlayerProps {
    players: PlayerData[];
    onChangRemovePlayer: (action: string) => void;
}

const PlayerList = (playerProps: PlayerProps) => {

    const playersSortedByScore = playerProps.players.sort((a, b) => b.score - a.score)

    return (
        <div className="mt-10 border-solid border-white">
            {playersSortedByScore
                .map(player =>
                    <Player playerData={player} key={player.id}  onSaveRemovePlayer={playerProps.onChangRemovePlayer}/>
                )}
        </div>
    )
}

export default PlayerList
