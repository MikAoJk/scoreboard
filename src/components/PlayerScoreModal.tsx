import {ChangeEvent, FormEvent, useState} from "react";
import {ArithmeticSign} from "@/components/ChangePlayerScore";

interface PlayerScoreModalProps {
    onSavePlayerScore: (action: number) => void;
    onCancel: () => void;
    arithmeticSign: ArithmeticSign;
}

const PlayerScoreModal = (playerScoreModalProps: PlayerScoreModalProps) => {

    const [enteredPlayerScore, setPlayerScore] = useState('')

    const playerScoreChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerScore(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerScore: number = Number(enteredPlayerScore)

        playerScoreModalProps.onSavePlayerScore(playerScore)

        setPlayerScore('')

    }

    return (
        <form onSubmit={submitHandler}>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="m-auto rounded-lg bg-white p-8 text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-100">
                    <div className="flex flex-col items-center">
                        <label className="font-medium">{playerScoreModalProps.arithmeticSign.toLocaleString()}</label>
                        <div>
                            <input type="number" value={enteredPlayerScore} step="1" onChange={playerScoreChangeHandler}
                                   className="ml-4 mt-4 rounded border border-slate-300 bg-white px-2 py-1 text-slate-900 dark:border-slate-600 dark:bg-slate-100"/>
                        </div>
                    </div>
                    <div>
                        <button onClick={playerScoreModalProps.onCancel} type="button"
                                className="mr-20 mt-2 rounded bg-yellow-400 px-2 py-1 font-medium text-slate-900">Cancel
                        </button>
                        <button type="submit" className="mt-4 rounded bg-green-600 px-2 py-1 font-medium text-white">Update</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}

export default PlayerScoreModal
