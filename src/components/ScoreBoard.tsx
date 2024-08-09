'use client';

import {PlayerData} from "@/components/Player";
import AddPlayer from "@/components/AddPlayer";
import ScoreCard from "@/components/ScoreCard";

import React, {useEffect, useState} from 'react';


const joakim: PlayerData = {
    id: 1,
    name: "Joakim",
    score: 0
}

const birgitte: PlayerData = {
    id: 2,
    name: "Birgitte",
    score: 0
}


const ScoreBoard = () => {

    const initPlayers =
        [joakim, birgitte]

    const [players, setPlayers] = useState<PlayerData[]>([])


    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {

            const value = localStorage.getItem('players')

            console.log(`value: ${value}`)

            if (value === null || value === 'undefined') {
                localStorage.setItem('players', JSON.stringify(initPlayers))
                setPlayers(initPlayers)
            } else {
                const valuePlayer: PlayerData[] = JSON.parse(value)
                setPlayers(valuePlayer)
            }
        }
    }, [])

    const addPlayerHandler = (player: PlayerData) => {
        if (typeof window !== 'undefined' && window.localStorage) {

            const value = localStorage.getItem('players')

            if (value !== null || value === 'undefined') {
                const valuePlayer: PlayerData[] = JSON.parse(value)
                valuePlayer.push(player)

                console.log(`currentPlayers: ${valuePlayer.map(player =>
                    player.id
                )}`)

                localStorage.setItem('players', JSON.stringify(valuePlayer))

                setPlayers(valuePlayer)
            }
        }
    }

    const removePlayerHandler = (playerName: string) => {
        const value = localStorage.getItem('players')

        if (value !== null || value === 'undefined') {
            const valuePlayer: PlayerData[] = JSON.parse(value)

            const index = valuePlayer.findIndex(playerdata => playerdata.name === playerName);

            if (index !== -1) {
                const newArray = [...valuePlayer.slice(0, index), ...valuePlayer.slice(index + 1)];

                localStorage.setItem('players', JSON.stringify(newArray))
                setPlayers(prevPlayers => {
                    return prevPlayers.filter((playerData) => playerData.name !== playerName)
                })

            }

        }
    }

    return (
        <div className="text-center">
            <h1 className="text-white">ScoreBoard</h1>
            <ScoreCard players={players} onChangRemovePlayer={removePlayerHandler}/>
            <AddPlayer onChangAddPlayer={addPlayerHandler}/>
        </div>
    )
}

export default ScoreBoard
