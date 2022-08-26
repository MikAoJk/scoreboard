import {ChangeEvent, FormEvent, useState} from "react";
import {PlayerData} from "./Player";

interface AddNewPlayerFormProps {
    onSaveAddNewPlayer: (action: PlayerData) => void;
    onCancel: () => void;
}

const AddNewPlayerForm = (addNewPlayerFormProps: AddNewPlayerFormProps) => {

    const [enteredPlayerName, setPlayerData] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerData(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerData: PlayerData = {
            name: enteredPlayerName,
            score: 0
        }

        addNewPlayerFormProps.onSaveAddNewPlayer(playerData)

        setPlayerData('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" pattern="^[^0-9]+$" value={enteredPlayerName} onChange={addNewPlayerChangeHandler}/>
                </div>
            </div>
            <div>
                <button onClick={addNewPlayerFormProps.onCancel} type="button">Cancel</button>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}
export default AddNewPlayerForm