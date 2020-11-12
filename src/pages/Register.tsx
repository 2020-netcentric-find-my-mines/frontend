import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Button,
  Heading,
  useColorMode,
  FormControl,
  FormLabel,
  Input,
  useToast,
  InputGroup,
  InputRightElement
} from "@chakra-ui/core";
import firebase from "../Firebase";

export default function Register() {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  const toast = useToast();

  function handleChange(event: any) {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  function handleSubmit() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        toast({
          title: "Register completed",
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
          title: "Register unsuccessful",
          description:
            "Password must be at least 6 characters and account must not be already registered. Please try again later.",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      });
  }

  return (
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
          <Heading>Register</Heading>
        </Box>
        <Box mt={4} textAlign="left" justifyItems="center">
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="text"
              name="email"
              variant="outline"
              value={email}
              onChange={handleChange}
              mb="3"
            />
            <FormLabel>Password:</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                variant="outline"
                value={password}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            width="full"
            mt={4}
            variantColor="teal"
            variant="solid"
            onClick={handleSubmit}
            fontSize="sm"
          >
            Register
          </Button>
          <Link to="/">
            <Button width="full" mt="2" fontSize="sm">
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
