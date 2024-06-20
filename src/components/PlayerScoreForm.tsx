import {ChangeEvent, FormEvent, useState} from "react";

interface PlayerScoreFormProps {
    onSavePlayerScore: (action: number) => void;
    onCancel: () => void;
}

const PlayerScoreForm = (playerScoreFormProps: PlayerScoreFormProps) => {

    const [enteredPlayerScore, setPlayerScore] = useState('')

    const playerScoreChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerScore(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const playerScore: number = Number(enteredPlayerScore)

        playerScoreFormProps.onSavePlayerScore(playerScore)

        setPlayerScore('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <input type="number" value={enteredPlayerScore} step="1" onChange={playerScoreChangeHandler}
                           className="text-black w-14 ml-2"/>
                </div>
            </div>
            <div>
                <button onClick={playerScoreFormProps.onCancel} type="button" className="mr-4 bg-yellow-400 mt-2 rounded">Cancel</button>
                <button type="submit" className="bg-green-600 rounded mt-4">update</button>
            </div>
        </form>
    )
}

export default PlayerScoreForm
