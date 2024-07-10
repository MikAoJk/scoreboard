import {useState} from "react";
import PlayerScoreModal from "@/components/PlayerScoreModal";


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
            {!isEditing && <button onClick={startAddEditingHandler} type="button"
                                   className="cursor-pointer bg-sky-500 text-white rounded mr-4 md:mr-10">+</button>}
            {!isEditing && <button onClick={startSubstractEditingHandler} type="button"
                                   className="cursor-pointer bg-sky-500 text-white rounded">-</button>}

            {isEditing && isAddButtomClicked &&
                <PlayerScoreModal onSavePlayerScore={saveAddPlayerScoreHandler} onCancel={stopEditingHandler}
                                  arithmeticSign={ArithmeticSign.Add}/>}
            {isEditing && !isAddButtomClicked &&
                <PlayerScoreModal onSavePlayerScore={saveSubstractPlayerScoreHandler} onCancel={stopEditingHandler}
                                  arithmeticSign={ArithmeticSign.Substract}/>}
        </div>
    )
}

export enum ArithmeticSign {
    Substract = "Substract",
    Add = "Add"
}

export default ChangePlayerScore
