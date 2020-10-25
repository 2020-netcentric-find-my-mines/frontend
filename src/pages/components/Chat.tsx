import React, { useState, useContext } from "react"
import axios from "axios"
import { Input } from "@chakra-ui/core"
import { GameContext } from "../../contexts/useGame";
import firebase from "../../Firebase"

export default function Chat() {
    const [chat, setChat] = useState("")
    const { gameState } = useContext(GameContext)
    // const chatData = firebase.database()

    const handleChange = (event: any) => {
        setChat(event.target.value)
    }

    const handleSubmit = () => {
        axios.post("https://asia-southeast2-findmymines.cloudfunctions.net/addChatMessage", {
            params: {
                gameId: gameState.id
            },
            body: {
                message: chat,
                uid: gameState.thisPlayer,
                username: gameState.thisPlayerName,
            }
        })
        // console.log(chatData)
        setChat("")
    }

    return (
        <Input placeholder="Chat..." value={chat} onSubmit={handleSubmit} onChange={handleChange}/>
    );
}