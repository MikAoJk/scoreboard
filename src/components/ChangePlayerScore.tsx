import PlayerScoreForm from "./PlayerScoreForm";
import {useState} from "react";


interface ChangePlayerScoreProps {
    onChangePlayerScore: (action: number) => void;
}

const ChangePlayerScore = (changePlayerScoreProp: ChangePlayerScoreProps) => {

    const savePlayerScoreHandler = (enteredScore: number) => {
        changePlayerScoreProp.onChangePlayerScore(enteredScore)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div>
            {!isEditing && <button onClick={startEditingHandler} type="button" className="cursor-pointer bg-gray-900 text-white ml-2">+/-</button>}
            {isEditing && <PlayerScoreForm onSavePlayerScore={savePlayerScoreHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default ChangePlayerScore