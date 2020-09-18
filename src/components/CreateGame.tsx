import React, { useContext, useEffect } from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Heading, Stack } from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { useSocket } from "../hooks/useSocket";
import onSocketEvent from "../logics/handleEvent";


export default function CreateGame(props: any) {
  const { gameState, gameDispatch } = useContext(GameContext);

  const { socket, emitEvent } = useSocket(
    process.env.REACT_APP_SOCKET_URL ??
      "https://netcentric-architecture.herokuapp.com/"
  );

  function createGame() {
    emitEvent(SocketEvent.CREATE_GAME, null);
  }

  
    // Handle Socket.IO events
    useEffect(() => {
      if (socket) {
        onSocketEvent(socket, gameDispatch);
      }
    }, [socket, gameDispatch]);
  

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
        <span style={{}}>ID: </span>
        <span style={{ color: "red" }}>{gameState.id}</span>
      </Box>
      <Button margin="1rem" onClick={createGame}>
        Create
      </Button>
    </Stack>
  );
}
