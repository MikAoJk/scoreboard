import {useState} from "react";
import AddPlayerForm from "./AddPlayerForm";
import {PlayerData} from "./Player";

interface AddPlayerProps {
    onChangAddPlayer: (action: PlayerData) => void;
}


const AddPlayer = (addPlayerProps: AddPlayerProps) => {

    const saveAddPlayerHandler = (enteredScore: PlayerData) => {
        addPlayerProps.onChangAddPlayer(enteredScore)
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
            {!isEditing && <button onClick={startEditingHandler} type="button">Add</button>}
            {isEditing && <AddPlayerForm onSaveAddPlayer={saveAddPlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default AddPlayer