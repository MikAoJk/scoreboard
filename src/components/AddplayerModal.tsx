import {ChangeEvent, FormEvent, useState} from "react";
import {PlayerData} from "./Player";

interface AddPlayerModalProps {
    onSaveAddPlayer: (action: PlayerData) => void;
    onCancel: () => void;
}

const AddPlayerModal = (addPlayerModalProps: AddPlayerModalProps) => {

    const [enteredPlayerName, setPlayerData] = useState('')

    const addNewPlayerChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerData(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const min = 3;
        const max = 1000;
        const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;

        const playerData: PlayerData = {
            id: randomNumber,
            name: enteredPlayerName,
            score: 0
        }

        addPlayerModalProps.onSaveAddPlayer(playerData)

    }

    return (
        <form onSubmit={submitHandler}>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="m-auto rounded-lg bg-white p-8 text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-100">
                    <div className="flex flex-col items-center">
                        <div>
                            <label className="font-medium">Name</label>
                            <input type="text" pattern="^[^0-9]+$" value={enteredPlayerName}
                                   onChange={addNewPlayerChangeHandler} className="ml-4 mt-4 rounded border border-slate-300 bg-white px-2 py-1 text-slate-900 dark:border-slate-600 dark:bg-slate-100"/>
                        </div>
                    </div>
                    <div>
                        <button onClick={addPlayerModalProps.onCancel} type="button"
                                className="mr-20 mt-2 rounded bg-yellow-400 px-2 py-1 font-medium text-slate-900">Cancel
                        </button>
                        <button type="submit" className="rounded bg-green-600 px-2 py-1 font-medium text-white">Add</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}
export default AddPlayerModal
