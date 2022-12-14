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
                    <label>Score</label>
                    <input type="number" value={enteredPlayerScore} step="1" onChange={playerScoreChangeHandler}/>
                </div>
            </div>
            <div>
                <button onClick={playerScoreFormProps.onCancel} type="button">Cancel</button>
                <button type="submit">+/-</button>
            </div>
        </form>
    )
}

export default PlayerScoreForm
