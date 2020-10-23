import React, { useContext } from "react";
import { Button, Flex, Box, Divider } from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { Link } from "react-router-dom";
import Board from "./components/Board";
import Info from "./components/Info";
import Chat from "./components/Chat";

export default function Play() {
  const { gameState } = useContext(GameContext);

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
      bg="gray.50"
    > 
      <Box
        p={10}
        bg="white"
        borderRadius={10}
        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        alignItems="center"
        justifyContent="center"
      >
        <Flex>
          <Flex direction="column">
            <Info />
            <Board />
          </Flex>
          <Divider orientation="vertical" />
          <Chat />
        </Flex>
      </Box>
    </Flex>
  );
}
