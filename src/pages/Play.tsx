import React, { useContext } from "react";
import { Button, Flex, Box, Divider, Text, useColorMode } from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { Link } from "react-router-dom";
import Board from "./components/Board";
import Info from "./components/Info";
import Chat from "./components/Chat";
import { SocketContext } from "../contexts/useSocket";
import SocketEvent from "../socket-event";

export default function Play() {
  const { gameState } = useContext(GameContext);
  const { colorMode } = useColorMode();
  const { emitEvent } = useContext(SocketContext)

  function emitResetBoard() {
    console.log(SocketEvent.RESET_BOARD)
    emitEvent(SocketEvent.RESET_BOARD, null)
  }
  
  if (!gameState.started) {
    return (
      <div>
        <h2>Loading...</h2>
        <p>Make sure you create/join game before starting.</p>
        <Link to="/">
          <Button>Click me to go back</Button>
        </Link>
      </div>
    );
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
        alignItems="center"
        justifyContent="center"
      >
        <Flex>
          <Flex direction="column">
            <Info />
            <Board />
            <Button onClick={emitResetBoard}>
              Reset Game
            </Button>
          </Flex>
          <Divider orientation="vertical" />
          <Flex direction="column">
            <Box backgroundColor="gray" padding="2">
              <Flex fontWeight="bold" fontSize="xl" justifyContent="center" pb="2">
                Scores
              </Flex>
              <Text>
              <span style={{ fontWeight: "bold" }}>{gameState.players[0].name?.length === 0 ? "Player 1" : gameState.players[0].name}: </span><span style={{ color: "orange" }}>{gameState.players[0].score}</span>
              </Text>
              <Text>
              <span style={{ fontWeight: "bold" }}>{gameState.players[1].name?.length === 0 ? "Player 2" : gameState.players[1].name}: </span><span style={{ color: "orange" }}>{gameState.players[1].score}</span>
              </Text>
              <Text fontWeight="light" pt={2}>
                There are {gameState.players.length} players online
              </Text>
            </Box>
            <Divider orientation="horizontal"/>
          <Chat />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
