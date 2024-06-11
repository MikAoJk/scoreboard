import {useState} from "react";
import RemovePlayerForm from "./RemovePlayerForm";

interface RemovePlayerProps {
    onChangRemovePlayer: (action: string) => void;
}


const RemovePlayer = (removePlayerProps: RemovePlayerProps) => {

    const saveRemovePlayerHandler = (playerName: string) => {
        removePlayerProps.onChangRemovePlayer(playerName)
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
            {!isEditing && <button onClick={startEditingHandler} type="button"
                                   className="cursor-pointer bg-red-700 text-white mr-4 mt-4">Remove</button>}
            {isEditing &&
                <RemovePlayerForm onSaveRemovePlayer={saveRemovePlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default RemovePlayer
