import React, {useContext} from "react";
import SocketEvent from "../socket-event";
import { Box, Button, Heading, Stack } from "@chakra-ui/core";
import { GameContext } from '../contexts/useGame'

export default function CreateGame(props: any) {

  const { gameState } = useContext(GameContext)

  const createGame = () => {
    props.emitEvent(SocketEvent.CREATE_GAME, null);
  }

  return (
    <Stack align="center">
      <Heading>Create Room</Heading>
      <Box padding="1rem">
        <span style={{}}>ID: </span>
        <span style={{ color: "red" }}>{gameState.id}</span>
      </Box>
      <Button margin="1rem" onClick={ createGame }>
        Create
      </Button>
    </Stack>
    
  )

  // const emitEvent = props.emitEvent;
  
  // const { gameState } = useContext(GameContext)

  // const createGame = () => {
  //   emitEvent(SocketEvent.CREATE_GAME, null);
  // }

  // return (
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

    // <Stack align="center">
    //   <Heading>Create Room</Heading>
    //   <Box padding="1rem">
    //     <span style={{}}>ID: </span>
    //     <span style={{ color: "red" }}>ppp</span>
    //   </Box>
    //   <Button margin="1rem" onClick={ createGame }>
    //     Create
    //   </Button>
    // </Stack>


  // )
}
