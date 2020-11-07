import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorMode,
  useToast,
} from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";
import SocketEvent from "../socket-event";
import firebase from "../Firebase";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { gameDispatch } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Find My Mines",
      description: "Have a great day!",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  }, [toast]);

  function handleChange(event: any) {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  function handleSubmit() {
    console.log("SET_PLAYER_NAME", name);
    gameDispatch({ type: "SET_PLAYER_NAME", payload: name });
    if (
      !(email === "" || email === null) &&
      !(password === "" || password === null)
    ) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          toast({
            title: "Sign in completed",
            description: "Thank you for being a part of Find My Mines!",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((error) => {
          console.log("Register error.", error.code, error.message);
          toast({
            title: "Sign in unsuccessful",
            description: "Please try again later.",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        });
    }
    emitEvent(SocketEvent.SET_PLAYER_NAME, name);
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
      >
        <Box textAlign="center">
          <Heading>Mine Sweeper</Heading>
        </Box>

        <Box my={4} textAlign="left" justifyItems="center">
          <FormControl>
            <FormLabel mb="1">Name:</FormLabel>
            <Input
              mb="3"
              name="name"
              type="text"
              placeholder="Ex: John"
              variant="outline"
              value={name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb="1">Email:</FormLabel>
            <Input
              mb="3"
              type="text"
              name="email"
              placeholder="Leave blank for guest"
              variant="outline"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb="1">Password:</FormLabel>
            <Input
              type="text"
              name="password"
              placeholder="Leave blank for guest"
              variant="outline"
              value={password}
              onChange={handleChange}
            />
          </FormControl>

          <Link to="create" style={{ textDecoration: "none" }}>
            <Button
              width="full"
              mt={4}
              variantColor="teal"
              variant="solid"
              isDisabled={name === "" ? true : false}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Link>

          <Link to="register" style={{ textDecoration: "none" }}>
            <Button
              width="full"
              mt="2"
              fontSize="sm"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
            >
              Register
            </Button>
          </Link>

          <Link to="leaderboard">
            <Button
              width="full"
              mt="2"
              fontSize="sm"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
            >
              Leaderboard
            </Button>
          </Link>
          <Button
            width="full"
            mt="2"
            fontSize="sm"
            color={colorMode === "light" ? "gray.600" : "gray.300"}
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
