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

    const [players, setPlayers] = useState(initPlayers)

    useEffect(() => {
    const value = localStorage.getItem('players')
    setPlayers(value)
  }, [])

    const addPlayerHandler = (player: PlayerData) => {
        setPlayers(prevPlayers => {
            return [player, ...prevPlayers]
        })
        localStorage.setItem('players', players)
    }

    const removePlayerHandler = (playerName: string) => {
        setPlayers(prevPlayers => {
            return prevPlayers.filter((playerData) => playerData.name !== playerName)
        })
    }

    return (
        <div className="p-4 text-center">
            <h1 className="text-white">ScoreBoard</h1>
            <ScoreCard players={players} onChangRemovePlayer={removePlayerHandler}/>
            <AddPlayer onChangAddPlayer={addPlayerHandler} numberOfPlayers={players.length}/>
        </div>
    )
}

export default ScoreBoard
