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
            {!isEditing && <button onClick={startEditingHandler} type="button">Remove player</button>}
            {isEditing && <RemovePlayerForm onSaveRemovePlayer={saveRemovePlayerHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default RemovePlayer