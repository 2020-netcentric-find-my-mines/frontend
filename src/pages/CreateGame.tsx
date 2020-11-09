import React, { useContext, useState, useEffect } from "react";
import SocketEvent from "../socket-event";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";
import { IPayload } from "../types/interface";

export default function CreateGame() {
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const [started, setStarted] = useState(false);
  const { colorMode } = useColorMode();
  const [boardSize, setBoardSize] = useState(6);
  const [numberOfBombs, setNumberOfBombs] = useState(3);
  const [maxPlayers, setMaxPlayers] = useState(2);
  const { socket } = useContext(SocketContext);

  const toast = useToast();

  function back() {
    emitEvent(SocketEvent.LEAVE_GAME);
  }

  useEffect(() => {
    socket.on(SocketEvent.SET_BOARD_SIZE_FEEDBACK, (payload: IPayload) => {
      console.log("SELECT_BOARD_SIZE_FEEDBACK", payload);
      if (!payload.isOK) {
        toast({
          title: "Unable to set board size",
          description: "This board size is not available.",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    });

    socket.on(SocketEvent.SET_NUMBER_OF_BOMB_FEEDBACK, (payload: IPayload) => {
      console.log("SELECT_NUMBER_OF_BOMB_FEEDBACK", payload);
      if (!payload.isOK) {
        toast({
          title: "Unable to set bomb number",
          description: "This bomb number is not available.",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    });

    socket.on(SocketEvent.SET_MAX_PLAYER_FEEDBACK, (payload: IPayload) => {
      console.log("SELECT_MAX_PLAYER_FEEDBACK", payload);
      if (!payload.isOK) {
        toast({
          title: "Unable to set max players",
          description: "This number of maximum players is not available.",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  }, [socket, toast]);

  const createGame = () => {
    emitEvent(SocketEvent.CREATE_GAME, null);
  };

  const startGame = () => {
    setStarted(true);
    emitEvent(SocketEvent.START_GAME, null);
  };

  function handleBoardSizeChange(value: React.ReactText) {
    setBoardSize(+value);
  }

  function handleBombChange(value: React.ReactText) {
    setNumberOfBombs(+value);
  }

  function handleMaxPlayerChange(value: React.ReactText) {
    setMaxPlayers(+value);
  }

  function submitGameParameters() {
    emitEvent("SET_MAX_PLAYER", maxPlayers);
    emitEvent("SET_NUMBER_OF_BOMB", numberOfBombs);
    emitEvent("SET_BOARD_SIZE", boardSize, boardSize);
    toast({
      title: "Notice",
      description: "The configuration is applied",
      status: "info",
      position: "top",
      duration: 1500,
      isClosable: true,
    });
  }

  const gameParameters =
    gameState.id !== "" ? (
      <Box
        width="full"
        p={5}
        m={5}
        bg={colorMode === "light" ? "gray.100" : "gray.500"}
        borderRadius={10}
      >
        <Text fontSize="xs" fontWeight="medium">
          Game ID:
        </Text>
        <Text py="1" rounded="md" fontWeight="bold" color="orange.300">
          {gameState.id}
        </Text>

        <Text mt="2" fontSize="xs" fontWeight="medium">
          Board size:
        </Text>

        <NumberInput
          step={1}
          min={2}
          max={10}
          value={boardSize}
          onChange={handleBoardSizeChange}
          rounded="md"
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Text mt="2" fontSize="xs" fontWeight="medium">
          Bombs:
        </Text>

        <NumberInput
          step={1}
          defaultValue={3}
          min={1}
          max={11}
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
          rounded="md"
          value={numberOfBombs}
          onChange={handleBombChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Text mt="2" fontSize="xs" fontWeight="medium">
          Max players:
        </Text>

        <NumberInput
          step={1}
          min={2}
          max={10}
          value={maxPlayers}
          onChange={handleMaxPlayerChange}
          rounded="md"
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button
          mt="2"
          color={colorMode === "light" ? "black.200" : "black.400"}
          width="full"
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
          onClick={submitGameParameters}
        >
          Apply
        </Button>
      </Box>
    ) : (
      <></>
    );

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
              <Heading>Create Game</Heading>
            </Box>
            <Flex direction="row">
              {gameParameters}
              {playerListBox}
            </Flex>

            <Box
              textAlign="left"
              justifyItems="center"
              mt={playerList.length === 0 ? 4 : 2}
            >
              <Button
                isLoading={started}
                loadingText="Starting..."
                width="full"
                variantColor={gameState.id === "" ? "teal" : "orange"}
                variant="solid"
                onClick={gameState.id === "" ? createGame : startGame}
                fontSize="sm"
                isDisabled={
                  gameState.id === ""
                    ? false
                    : gameState.players.length > 1
                    ? false
                    : true
                }
              >
                {gameState.id === "" ? "Generate Game ID" : "Start Game"}
              </Button>

              <Link to="/join">
                <Button
                  hidden={gameState.id !== ""}
                  isLoading={started}
                  width="full"
                  mt="2"
                  fontSize="sm"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                >
                  Join Game
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
