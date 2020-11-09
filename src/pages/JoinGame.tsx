import React, { useContext, useState } from "react";
import SocketEvent from "../socket-event";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  useColorMode,
} from "@chakra-ui/core";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";
import { IPayload } from "../types/interface";

export default function JoinGame() {
  const [textfield, setTextField] = useState("");
  const [isJoin, setIsJoin] = useState(false);
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const [started, setStarted] = useState(false);
  const { colorMode } = useColorMode();
  const { socket } = useContext(SocketContext);

  function back() {
    emitEvent(SocketEvent.LEAVE_GAME);
  }
  socket.on(SocketEvent.JOIN_GAME_FEEDBACK, (payload: IPayload) => {
    setIsJoin(true);
  });
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
  const playerList: JSX.Element[] = [];
  let playerKey = 0;
  gameState.players.forEach((player) =>
    playerList.push(
      <Text key={playerKey++}>
        {player.name === "" || player.name === null ? "Anonymous" : player.name}
      </Text>
    )
  );
  const playerListBox = (
    <Box
      hidden={playerList.length === 0 ? true : false}
      width="full"
      p={5}
      m={5}
      bg={colorMode === "light" ? "gray.100" : "gray.500"}
      borderRadius={10}
    >
      <Text as="u">Players joined:</Text>
      {playerList}
    </Box>
  );

  return (
    <>
      {gameState.started ? (
        <Redirect to="/play" />
      ) : (
        <Flex
          width="full"
          height="100%"
          align="center"
          minHeight="100vh"
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
              <Heading minWidth="20rem">Join Game</Heading>
            </Box>
            <Flex>{playerListBox}</Flex>
            <Box
              textAlign="left"
              justifyItems="center"
              mt={playerList.length === 0 ? 2 : 0}
            >
              <FormControl>
                <FormLabel mb="1">Enter Game ID:</FormLabel>
                {isJoin === false ? (
                  <Input
                    type="text"
                    placeholder="Ex: XRTMK35"
                    variant="outline"
                    value={textfield}
                    onChange={handleChange}
                  />
                ) : (
                  <Text color="orange.400" fontWeight="bold">{textfield}</Text>
                )}
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
                  hidden={isJoin === true ? true: false}
                  isLoading={started}
                  width="full"
                  mt="2"
                  fontSize="sm"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                >
                  Create game
                </Button>
              </Link>
              <Link to="/">
                <Button
                  width="full"
                  mt="2"
                  fontSize="sm"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                  onClick={() => {
                    back();
                  }}
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
}
