import React from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Heading, Stack } from "@chakra-ui/core";

export default function CreateGame(props: any) {
  const emitEvent = props.emitEvent;
  const gameID = props.gameID;

  function createGame() {
    emitEvent(SocketEvent.CREATE_GAME, null);
  }

  return (
    // <>
    //     <Modal isOpen={isOpen} onClose={onClose}>
    //         <ModalOverlay />
    //         <ModalContent>
    //             <ModalHeader>Game Created</ModalHeader>
    //             <ModalBody>
    //                 Ask you friends to join game <br/> <br/>
    //                 <span style={{fontWeight: 'bolder'}}>ID: {gameID}</span>
    //             </ModalBody>

    //             <ModalFooter>
    //                 <Button variantColor="blue" mr={3} onClick={() => { onClose(); exit();}}>
    //                     Close
    //                 </Button>
    //             </ModalFooter>
    //         </ModalContent>
    //     </Modal>
    // </>
    <Stack align="center">
      <Heading>Create Room</Heading>
      <Box padding="1rem">
        {/* <Input placeholder="Enter the game's ID" width="-32px" value={textfield} onChange={handleChange}/> */}
        <span style={{}}>ID: </span>
        <span style={{ color: "red" }}>{gameID}</span>
      </Box>
      <Button margin="1rem" onClick={createGame}>
        Create
      </Button>
    </Stack>
  );
}
