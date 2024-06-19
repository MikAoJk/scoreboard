import PlayerScoreForm from "./PlayerScoreForm";
import {useState} from "react";


interface ChangePlayerScoreProps {
    onAddChangePlayerScore: (action: number) => void;
    onSubstractChangePlayerScore: (action: number) => void;
}

const ChangePlayerScore = (changePlayerScoreProp: ChangePlayerScoreProps) => {

    const saveAddPlayerScoreHandler = (enteredScore: number) => {
        changePlayerScoreProp.onAddChangePlayerScore(enteredScore)
        setIsEditing(false)
    }

    const saveSubstractPlayerScoreHandler = (enteredScore: number) => {
        changePlayerScoreProp.onSubstractChangePlayerScore(enteredScore)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)

    const [isAddButtomClicked, setIAddButtomClicked] = useState(false)

    const startAddEditingHandler = () => {
        setIsEditing(true)
        setIAddButtomClicked(true)
    }

    const startSubstractEditingHandler = () => {
        setIsEditing(true)
        setIAddButtomClicked(false)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div>
            {!isEditing && <button onClick={startAddEditingHandler} type="button" className="cursor-pointer bg-sky-500 text-white ml-2 rounded">+</button>}
            {!isEditing && <button onClick={startSubstractEditingHandler} type="button" className="cursor-pointer bg-sky-500 text-white ml-4 rounded">-</button>}

            {isEditing && isAddButtomClicked && <PlayerScoreForm onSavePlayerScore={saveAddPlayerScoreHandler} onCancel={stopEditingHandler}/>}                                                                                                                                         
            {isEditing && !isAddButtomClicked && <PlayerScoreForm onSavePlayerScore={saveSubstractPlayerScoreHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default ChangePlayerScore
