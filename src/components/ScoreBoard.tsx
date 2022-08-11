import './ScoreBoard.css'
import PlayerCard from "./PlayerCard";


const ScoreBoard = () => {
    return (
        <div className="scoreboard">
            <h1>ScoreBoard</h1>
            <table>
                <tbody>
                <PlayerCard/>
                </tbody>
            </table>
        </div>
    )
}

export default ScoreBoard