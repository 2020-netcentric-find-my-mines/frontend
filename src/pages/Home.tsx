import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/core";

export default function Home() {
  return (
    <Flex
      width="full"
      height="100%"
      align="center"
      position="absolute"
      justifyContent="center"
      bg="gray.50"
    >
      <Box p={10} bg="white" borderRadius={10} boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)">
        <Box textAlign="center">
          <Heading>Mine Sweeper</Heading>
        </Box>
        <Box my={4} textAlign="left" justifyItems="center">
          <FormControl>
            <FormLabel mb="2">Enter your name:</FormLabel>
            <Input
              type="text"
              placeholder="Ex: John"
              variant="outline"
            />
          </FormControl>
          <Link to="create" style={{ textDecoration: "none" }}>
            <Button width="full" mt={4} variantColor="teal" variant="solid">
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
    // <Flex justifyContent="center" alignItems="center" height="100%" bg="gray.50" position="absolute">
    //   <Box
    //     bg="white"
    //     width={[22 / 24, 16 / 24, 10 / 24, 6 / 24]}
    //     boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    //     p={6}
    //     borderRadius={10}
    //   >
    //     <React.Fragment>
    //       <Heading size="lg">Authentication Required</Heading>
    //       <Text py={5}>
    //         Please use Google Account to sign-in in order to access this page
    //       </Text>
    //       <Button width="100%" variant="solid" onClick={() => {}}>
    //         Sign in
    //       </Button>
    //     </React.Fragment>
    //   </Box>
    // </Flex>
  );
}
