import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame"
import { SocketContext } from "../contexts/useSocket"
import SocketEvent from "../socket-event";

export default function Home() {

  const [ name, setName ] = useState("")
  const { gameDispatch } = useContext(GameContext)
  const { emitEvent } = useContext(SocketContext)

  function handleNameChange(event: any) {
    setName(event.target.value)
  }

  function emitName() {
    console.log("SET_PLAYER_NAME", name)
    gameDispatch({ type: "SET_PLAYER_NAME", payload: name })
    emitEvent(SocketEvent.SET_PLAYER_NAME, name)
  }

  return (
    <Flex
      width="full"
      height="100%"
      align="center"
      position="absolute"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        p={10}
        bg="white"
        borderRadius={10}
        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      >
        <Box textAlign="center">
          <Heading>Mine Sweeper</Heading>
        </Box>

        <Box my={4} textAlign="left" justifyItems="center">

          <FormControl onSubmit={() => {}}>
            <FormLabel mb="2">Enter your name:</FormLabel>
            <Input type="text" placeholder="Ex: John" variant="outline" value={name} onChange={handleNameChange}/>
          </FormControl>

          <Link to="create" style={{ textDecoration: "none" }}>
            <Button width="full" mt={4} variantColor="teal" variant="solid" onClick={emitName}>
              Continue
            </Button>
          </Link>

          <Link to="/leaderboard">
            <Button width="full" mt="2" fontSize="sm" color="gray.600">
              Leaderboard
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
