import React from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function CreateGame(props: any) {
  const emitEvent = props.emitEvent;
  const gameID = props.gameID;

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
            ID: <span style={{ color: "red" }}>{gameID}</span>
          </Text>

          <Button
            width="full"
            mt={4}
            variantColor={gameID === "" ? "teal" : "orange"}
            variant="solid"
            onClick={gameID === "" ? createGame : startGame}
          >
            {gameID === "" ? "Generate" : "Start Game"}
          </Button>
          <Link to="/game/join">
            <Text width="full" mt="2" fontSize="xs" color="gray.600">
              Join Game
            </Text>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
