import {useState} from "react";
import {PlayerData} from "./Player";
import AddPlayerModal from "@/components/AddplayerModal";

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
            {!isEditing && <button onClick={startEditingHandler} type="button" className="cursor-pointer bg-green-600 text-white rounded">Add</button>}
            {isEditing && <AddPlayerModal onSaveAddPlayer={saveAddPlayerHandler} onCancel={stopEditingHandler} numberOfPlayers={addPlayerProps.numberOfPlayers}/>}
        </div>
    )
}

export default AddPlayer
