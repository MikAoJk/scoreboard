import {useState} from "react";
import AddNewPlayerForm from "./AddNewPlayerForm";
import {PlayerData} from "./Player";

interface AddNewPlayerProps {
    onChangAddNewPlayer: (action: PlayerData) => void;
}


const AddNewPlayer = (addNewPlayer: AddNewPlayerProps) => {

    const saveAddNewPlayerHandler = (enteredScore: PlayerData) => {
        addNewPlayer.onChangAddNewPlayer(enteredScore)
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
        <div className="addnewplayer">
            {!isEditing && <button onClick={startEditingHandler} type="button">Add player</button>}
            {isEditing && <AddNewPlayerForm onSaveAddNewPlayer={saveAddNewPlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default AddNewPlayer