import {ChangeEvent, FormEvent, useState} from "react";

interface RemovePlayerFormProps {
    onSaveRemovePlayer: (action: string) => void;
    onCancel: () => void;
}

const RemovePlayerForm = (removePlayerFormProps: RemovePlayerFormProps) => {

    const [enteredPlayerName, setPlayerName] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        removePlayerFormProps.onSaveRemovePlayer(enteredPlayerName)

        setPlayerName('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div class="text-black">>
                    <label>Name</label>
                    <input type="text" pattern="^[^0-9]+$" value={enteredPlayerName} onChange={addNewPlayerChangeHandler}/>
                </div>
            </div>
            <div>
                <button onClick={removePlayerFormProps.onCancel} type="button">Cancel</button>
                <button type="submit">Remove</button>
            </div>
        </form>
    )
}
export default RemovePlayerForm
