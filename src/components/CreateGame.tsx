import React, { useContext } from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { GameContext } from "../contexts/useGame";

export default function CreateGame(props: any) {
  const { gameState } = useContext(GameContext);
  const emitEvent = props.emitEvent;
  function createGame() {
    emitEvent(SocketEvent.CREATE_GAME, null);
  }

  function startGame() {
    emitEvent(SocketEvent.START_GAME, null);
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
          <Heading>Create Game</Heading>
        </Box>
        <Box mt={4} textAlign="left" justifyItems="center">
          <Text
            width="full"
            mt="2"
            fontSize="md"
            color="gray.600"
            fontWeight=""
          >
            {gameState.id === "" ? "" : "ID: "}
            <span style={{ color: "red" }}>{gameState.id}</span>
          </Text>

          <Button
            width="full"
            mt={4}
            variantColor={gameState.id === "" ? "teal" : "orange"}
            variant="solid"
            onClick={gameState.id === "" ? createGame : startGame}
            fontSize="sm"
            isDisabled={
              gameState.id === "" ? false : gameState.playerJoined === true ? false : true
            }
          >
            {gameState.id === "" ? "Generate" : "Start Game"}
          </Button>
          <Link to="/game/join">
            <Button width="full" mt="2" fontSize="sm" color="gray.600">
              Join Game
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
