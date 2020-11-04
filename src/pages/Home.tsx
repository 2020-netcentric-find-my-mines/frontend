import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorMode,
  useToast
} from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame"
import { SocketContext } from "../contexts/useSocket"
import SocketEvent from "../socket-event";

export default function Home() {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const { gameDispatch } = useContext(GameContext)
  const { emitEvent } = useContext(SocketContext)
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Find My Mines",
      description: "Have a great day!",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    })
  }, [toast]);

  function handleNameChange(event: any) {
    setName(event.target.value)
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value)
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
      bg={colorMode === "light" ? "gray.50" : "gray.700"}
    >
      <Box
        p={10}
        bg={colorMode === "light" ? "white" : "gray.600"}
        borderRadius={10}
        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      >
        <Box textAlign="center">
          <Heading>Mine Sweeper</Heading>
        </Box>

        <Box my={4} textAlign="left" justifyItems="center">

          <FormControl>
            <FormLabel mb="1">Name:</FormLabel>
            <Input mb="3" type="text" placeholder="Ex: John" variant="outline" value={name} onChange={handleNameChange}/>
          </FormControl>
          <FormControl>
            <FormLabel mb="1">Email:</FormLabel>
            <Input type="text" placeholder="Leave blank for guest" variant="outline" value={email} onChange={handleEmailChange}/>
          </FormControl>

          <Link to="create" style={{ textDecoration: "none" }}>
            <Button width="full" mt={4} variantColor="teal" variant="solid" onClick={emitName}>
              Continue
            </Button>
          </Link>

          <Link to="/leaderboard">
            <Button width="full" mt="2" fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.300"}>
              Leaderboard
            </Button>
          </Link>
          <Button width="full" mt="2" fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.300"} onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} 
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
