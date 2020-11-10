import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/core";
import { GameContext } from "../../contexts/useGame";

export default function WinnerModal() {
  const { gameState, gameDispatch } = useContext(GameContext);
  
  function findWinner(): string {
    const winner = gameState.winner;
    if (winner.length === 1) {
      return (
        "The winner is " +
        winner[0].name +
        " with a score of " +
        winner[0].score
      );
    } else if (winner.length > 1) {
      let tiePlayers = "";
      for (let i = 0; i < winner.length; i++) {
        if (tiePlayers !== "") {
          tiePlayers = tiePlayers + ", ";
        }
        tiePlayers = tiePlayers + winner[i].name;
      }
      return (
        "Tie between " +
        tiePlayers +
        " with a score of " +
        winner[0].score
      );
    } else {
      return "";
    }
  }

  return (
    <>
      <Modal isOpen={gameState.showWinnerModal}>
        <ModalOverlay />
        <ModalContent>
  <ModalHeader>{gameState.winner.length === 1 ? "Congratulations" : "Tie"}!</ModalHeader>
          <ModalBody>{findWinner()}</ModalBody>
          <ModalFooter>
            <Button
              variantColor="blue"
              mr={3}
              onClick={() => {
                gameDispatch({ type: "SHOW_WINNER", payload: false });
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
