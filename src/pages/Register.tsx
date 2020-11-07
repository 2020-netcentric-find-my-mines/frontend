import React, {useState} from "react"
import { Link } from "react-router-dom"
import { Flex, Box, Button, Heading, useColorMode, FormControl, FormLabel, Input } from "@chakra-ui/core"
import axios from "axios"

export function Register() {
    const { colorMode } = useColorMode();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")

    function handleChange(event: any) {
        if (event.target.name === "username") {
            setUsername(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        }
    }

    function handleSubmit() {
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
              <Heading>Register</Heading>
            </Box>
            <Box mt={4} textAlign="left" justifyItems="center">
              <FormControl>
                <FormLabel mb="2">Username:</FormLabel>
                <Input
                  type="text"
                  name="username"
                  placeholder="Ex: John"
                  variant="outline"
                  value={username}
                  onChange={handleChange}
                />
                <FormLabel mb="2">Email:</FormLabel>
                <Input
                  type="text"
                  name="email"
                  placeholder="Ex: John"
                  variant="outline"
                  value={email}
                  onChange={handleChange}
                />
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
    )
}