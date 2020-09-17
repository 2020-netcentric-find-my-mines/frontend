import React from 'react'
import { Link } from "react-router-dom";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/core'

export default function Home() {
    return (
        <Flex width="full" height="60%" align="center" position="absolute" justifyContent="center">
            <Box p={2}>
                <Box textAlign="center">
                <Heading>Mine Sweeper</Heading>
                </Box>
                <Box my={4} textAlign="left" justifyItems="center">
                <FormControl>
                    <FormLabel mb="2">Enter your name:</FormLabel>
                    <Input type="text" placeholder="John" variant="outline" width="-32px" />
                </FormControl>
                <Link to="/game" style={{ textDecoration: 'none' }}>
                    <Button width="full" mt={4} variantColor="green" variant="outline">
                    Continue
                    </Button>
                </Link>
                </Box>
            </Box>
        </Flex>
    )
}
