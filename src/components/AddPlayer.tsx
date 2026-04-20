import {useState} from "react";
import {PlayerData} from "./Player";
import AddPlayerModal from "@/components/AddplayerModal";

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
            {!isEditing && <button onClick={startEditingHandler} type="button" className="mt-10 cursor-pointer rounded bg-green-600 px-4 py-2 font-bold text-white shadow-sm">Add</button>}
            {isEditing && <AddPlayerModal onSaveAddPlayer={saveAddPlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default AddPlayer
