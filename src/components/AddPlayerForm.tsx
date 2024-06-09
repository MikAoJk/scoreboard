import {ChangeEvent, FormEvent, useState} from "react";
import {PlayerData} from "./Player";

interface AddPlayerFormProps {
    onSaveAddPlayer: (action: PlayerData) => void;
    onCancel: () => void;
}

const AddPlayerForm = (addPlayerFormProps: AddPlayerFormProps) => {

    const [enteredPlayerName, setPlayerData] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerData(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerData: PlayerData = {
            id: 3, // TODO fix id, to increase based on number of players
            name: enteredPlayerName,
            score: 0
        }

        addPlayerFormProps.onSaveAddPlayer(playerData)

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
                <button onClick={addPlayerFormProps.onCancel} type="button">Cancel</button>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}
export default AddPlayerForm