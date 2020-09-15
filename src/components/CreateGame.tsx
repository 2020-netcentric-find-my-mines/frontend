import React from 'react'
import SocketEvent from '../socket-event'
import onSocketEvent from '../logics/handleEvent'
import { Box, Button, useDisclosure } from '@chakra-ui/core'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/core";

export default function CreateGame(props: any) {
    const setLoading = props.setLoading
    const { isOpen, onClose } = useDisclosure(true);
    const gameID = props.gameID;
    const exit = () => {
        setLoading("", false)
    }


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Game Created</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Ask you friends to join game <br/> <br/>
                        <span style={{fontWeight: 'bolder'}}>ID: {gameID}</span>
                    </ModalBody>

                    <ModalFooter>
                        <Button variantColor="blue" mr={3} onClick={() => { onClose(); exit();}}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}