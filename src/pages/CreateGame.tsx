import React, { useContext, useState } from "react";
import SocketEvent from "../socket-event";
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Text, 
  useColorMode, 
  NumberInput, 
  NumberInputField, 
  NumberInputStepper, 
  NumberIncrementStepper, 
  NumberDecrementStepper 
} from "@chakra-ui/core";
import { Link, Redirect } from "react-router-dom";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";

export default function CreateGame() {
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const [started, setStarted] = useState(false)
  const { colorMode } = useColorMode();
  const [boardSizeValue, setBoardSizeValue] = useState(6)
  const [bombValue, setBombValue] = useState(3)

  const createGame = () => {
    emitEvent(SocketEvent.CREATE_GAME, null);
  }

  const startGame = () => {
    setStarted(true)
    emitEvent(SocketEvent.START_GAME, null);
  }

  function handleBoardSizeChange(value: React.ReactText) {
    setBoardSizeValue(+value)
  } 

  function handleBombChange(value: React.ReactText) {
    setBombValue(+value)
  }

  function submitGameParameters() {
    emitEvent('SET_NUMBER_OF_BOMB', bombValue)
    emitEvent('SET_BOARD_SIZE', boardSizeValue, boardSizeValue)
  }

  const gameParameters = gameState.id !== "" ? (
    <Box
      p={5}
      m={5}
      bg={colorMode === "light" ? "gray.100" : "gray.500"}
      borderRadius={10}
    >
      <Text fontSize="xs" fontWeight="medium">
        Game ID:
      </Text>
        <Text py="1" rounded="md" fontWeight="bold"
>
        <span style={{ color: "orange" }}>{gameState.id}</span>
        </Text>

      <Text mt="2" fontSize="xs" fontWeight="medium">
        Board size:
      </Text>

      <NumberInput 
        step={1} 
        min={2} 
        max={10} 
        value={boardSizeValue} 
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
        max={10}
        bg={colorMode === "light" ? "gray.200" : "gray.600"}
        rounded="md"
        value={bombValue} 
        onChange={handleBombChange}
        
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
  ) : <></>

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
              <Heading>Create Game</Heading>
            </Box>

            {gameParameters}

            <Box mt={4} textAlign="left" justifyItems="center">
              <Button
                isLoading={started}
                loadingText="Starting..."
                width="full"
                mt={4}
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
                <Button isLoading={started} width="full" mt="2" fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.300"}>
                  Join Game
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
}
