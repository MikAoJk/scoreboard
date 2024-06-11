import {useState} from "react";
import AddPlayerForm from "./AddPlayerForm";
import {PlayerData} from "./Player";

interface AddPlayerProps {
    onChangAddPlayer: (action: PlayerData) => void;
    numberOfPlayers: number;
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
            {!isEditing && <button onClick={startEditingHandler} type="button" className="cursor-pointer bg-green-600 mt-10 text-white">Add</button>}
            {isEditing && <AddPlayerForm onSaveAddPlayer={saveAddPlayerHandler} onCancel={stopEditingHandler} numberOfPlayers={addPlayerProps.numberOfPlayers}/>}
        </div>
    )
}

export default AddPlayer
