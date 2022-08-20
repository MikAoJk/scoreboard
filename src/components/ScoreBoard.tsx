import './ScoreBoard.css'
import ScoreCard from "./ScoreCard";


const ScoreBoard = () => {
    return (
        <div className="scoreboard">
            <h1>ScoreBoard</h1>
            <table>
                <tbody>
                <ScoreCard/>
                </tbody>
            </table>
        </div>
    )
}

export default ScoreBoard