import React, { useState } from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Heading, Input, Stack } from "@chakra-ui/core";

export default function JoinGame(props: any) {
  let [textfield, setTextField] = useState("");

  const emitEvent = props.emitEvent;

  function submit() {
    emitEvent(SocketEvent.JOIN_GAME, textfield);
  }

  function handleChange(event: any) {
    setTextField(event.target.value);
  }

  return (
    <Stack align="center">
      <Heading>Join Room</Heading>
      <Box margin="5" maxWidth="300px">
        <Input
          placeholder="Enter the game's ID"
          width="-32px"
          value={textfield}
          onChange={handleChange}
        />
      </Box>
      <Button margin="1rem" onClick={submit}>
        Join
      </Button>
    </Stack>
  )
}
