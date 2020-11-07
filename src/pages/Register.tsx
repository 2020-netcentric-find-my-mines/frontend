import React, {useState} from "react"
import { Flex, Box, Button, Heading, useColorMode, FormControl, FormLabel, Input } from "@chakra-ui/core"

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
                <Button isLoading={started} width="full" mt="2" fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.300"}>
                  Create game
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>

    )
}