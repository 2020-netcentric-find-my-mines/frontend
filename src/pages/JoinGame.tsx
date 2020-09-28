import React, { useContext, useState } from "react";
import SocketEvent from "../socket-event";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/core";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";

export default function JoinGame(props: any) {
  const [textfield, setTextField] = useState("");
  const { gameState } = useContext(GameContext);
  const { socketDispatch } = useContext(SocketContext);

  function joinGame() {
    socketDispatch({ type: SocketEvent.JOIN_GAME, payload: textfield });
  }
  function startGame() {
    socketDispatch({ type: SocketEvent.START_GAME, payload: null });
  }

  function handleChange(event: any) {
    setTextField(event.target.value);
  }

  return (
    <>
      {gameState.started ? (
        <Redirect to="/play" />
      ) : (
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
              <Heading>Join Game</Heading>
            </Box>
            <Box mt={4} textAlign="left" justifyItems="center">
              <FormControl>
                <FormLabel mb="2">Enter Game ID:</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex: XRTMK35"
                  variant="outline"
                  value={textfield}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                variantColor={
                  gameState.playerJoined === true ? "orange" : "teal"
                }
                variant="solid"
                onClick={gameState.playerJoined === true ? startGame : joinGame}
                fontSize="sm"
              >
                {gameState.playerJoined === true ? "Start Game" : "Join Game"}
              </Button>
              <Link to="/create">
                <Button width="full" mt="2" fontSize="sm" color="gray.600">
                  Create game
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
}
