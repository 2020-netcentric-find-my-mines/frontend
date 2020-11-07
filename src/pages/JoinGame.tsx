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
  useColorMode,
} from "@chakra-ui/core";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";

export default function JoinGame() {
  const [textfield, setTextField] = useState("");
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const [started, setStarted] = useState(false);
  const { colorMode } = useColorMode();

  function joinGame() {
    emitEvent(SocketEvent.JOIN_GAME, textfield);
  }
  function startGame() {
    setStarted(true);
    emitEvent(SocketEvent.START_GAME, null);
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
          bg={colorMode === "light" ? "gray.50" : "gray.700"}
        >
          <Box
            p={10}
            bg={colorMode === "light" ? "white" : "gray.600"}
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
                isLoading={started}
                loadingText="Starting..."
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
                <Button
                  isLoading={started}
                  width="full"
                  mt="2"
                  fontSize="sm"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                >
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
