import {ChangeEvent, FormEvent, useState} from "react";
import {PlayerData} from "./Player";

interface AddPlayerFormProps {
    onSaveAddPlayer: (action: PlayerData) => void;
    onCancel: () => void;
    numberOfPlayers: number;
}

const AddPlayerForm = (addPlayerFormProps: AddPlayerFormProps, numberOfPlayers: number) => {

    const [enteredPlayerName, setPlayerData] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerData(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerData: PlayerData = {
            id: (numberOfPlayers + 1),
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
                    <input type="text" pattern="^[^0-9]+$" value={enteredPlayerName} onChange={addNewPlayerChangeHandler} className="text-black text-sm mt-4"/>
                </div>
            </div>
            <div>
                <button onClick={addPlayerFormProps.onCancel} type="button" className="mr-4 bg-yellow-400 mt-2 rounded">Cancel</button>
                <button type="submit" className="bg-green-600 rounded">Add</button>
            </div>
        </form>
    )
}
export default AddPlayerForm
