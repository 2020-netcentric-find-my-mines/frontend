import React, { useContext } from "react";
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
} from "@chakra-ui/core";
import { GameContext } from '../../contexts/useGame'

export default function WinnerModal() {
  const { gameState, gameDispatch } = useContext(GameContext)

  function findWinner():string{
    const players = gameState.players;
    let maxScore = 0;
    let winner = "";
    for (let i = 1; i < players.length; i++){
      if (players[i].score > maxScore){
      maxScore = players[i].score;
    }
    }
    for (let i = 0; i < players.length-1; i++) {
      if (players[i] === maxScore) {
        if (winner !== "") {
          winner.concat(" ")
        }
        winner.concat(players[i].name)
      }
    }
    return winner;
  }

  return(
    <>
      <Modal isOpen={gameState.showWinnerModal} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Congratulations!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            The winner(s) = {findWinner()}
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={() => {gameDispatch({ type: "SHOW_WINNER", payload: false })}}>
              Exit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
