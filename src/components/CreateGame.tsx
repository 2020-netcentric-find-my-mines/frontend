import React from 'react'
import SocketEvent from '../socket-event'
import onSocketEvent  from '../logics/handleEvent'
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        dsfasdfasd
              </ModalBody>

                    <ModalFooter>
                        <Button variantColor="blue" mr={3} onClick={onClose}>
                            Close
                </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}