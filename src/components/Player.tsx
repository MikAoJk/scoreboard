export interface PlayerProps {
    name: string
    score: number
}

const Player = (playerProps: PlayerProps) => {

    return (
        <div>
            <tr>
                <td>{playerProps.name}</td>
                <td>{playerProps.score}</td>
            </tr>
        </div>
    )
}

export type PlayerData = {
    name: string
    score: number
}

export default Player