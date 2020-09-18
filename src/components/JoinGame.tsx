import React, { useState } from "react";
import SocketEvent from "../socket-event";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function JoinGame(props: any) {
  let [textfield, setTextField] = useState("");
  const playerJoin = props.playerJoin;

  const emitEvent = props.emitEvent;

  function joinGame() {
    emitEvent(SocketEvent.JOIN_GAME, textfield);
  }
  function startGame() {
    emitEvent(SocketEvent.START_GAME, null);
  }

  function handleChange(event: any) {
    setTextField(event.target.value);
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
            variantColor={playerJoin === true ? "orange" : "teal"}
            variant="solid"
            onClick={playerJoin === true ? startGame : joinGame}
          >
            {playerJoin === true ? "Start Game" : "Join Game"}
          </Button>
          <Link to="/game/create">
            <Text width="full" mt="2" fontSize="xs" color="gray.600">
              Create game
            </Text>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
