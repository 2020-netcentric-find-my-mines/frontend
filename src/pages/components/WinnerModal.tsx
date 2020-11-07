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

  // function findWinner(): string {
  //   const players = gameState.players;
  //   let maxScore = 0;
  //   let winner = "";

  //   for (let i = 0; i < players.length; i++) {
  //     if (players[i].score > maxScore) {
  //       maxScore = players[i].score;
  //     }
  //   }
  //   for (let i = 0; i < players.length; i++) {
  //     console.log(maxScore);
  //     console.log(players[i].name);
  //     console.log(players[i].score);
  //     if (players[i].score === maxScore) {
  //       if (winner !== "") {
  //         winner = winner + " ";
  //       }
  //       winner = winner + players[i].name;
  //     }
  //   }
  //   return winner;
  // }

  function findWinner(): string {
    const winner = gameState.winner;
    console.log(winner);
    console.log(winner.length + "leng");
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
          tiePlayers = tiePlayers + " ";
        }
        tiePlayers = tiePlayers + winner[i].name;
      }
      return (
        "There is a tie between " +
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
          <ModalHeader>Congratulations!</ModalHeader>
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
