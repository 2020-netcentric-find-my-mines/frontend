import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
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
        "Tie between " + tiePlayers + " with a score of " + winner[0].score
      );
    } else {
      return "";
    }
  }

  function findWinner2(): JSX.Element[] {
    const player = gameState.players;
    const winner = gameState.winner;
    const winnerID = winner.map((winner) => winner.id);
    let div: JSX.Element[] = [];

    for (let i = 0; i < player.length; i++) {
      if (winner.length === 1) {
        div.push(
          <Text
            fontWeight={winnerID.includes(player[i].id) ? "bold" : "normal"}
          >
            {winnerID.includes(player[i].id) ? "🎉" : ""} {player[i].name}:{" "}
            {player[i].score} {winnerID.includes(player[i].id) ? "🎉" : ""}{" "}
            {winnerID.includes(player[i].id) ? "Winner" : ""}
          </Text>
        );
      } else {
        div.push(
          <Text
            fontWeight={winnerID.includes(player[i].id) ? "bold" : "normal"}
          >
            {winnerID.includes(player[i].id) ? "🎉" : ""} {player[i].name}:{" "}
            {player[i].score} {winnerID.includes(player[i].id) ? "🎉" : ""}{" "}
            {winnerID.includes(player[i].id) ? "Tie" : ""}
          </Text>
        );
      }
    }
    return div;
  }

  return (
    <>
      <Modal isOpen={gameState.showWinnerModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {gameState.winner.length === 1 ? "Congratulations" : "Tie"}!
          </ModalHeader>
          <ModalBody>
            {findWinner()} <br /> <br />
            {findWinner2()}
          </ModalBody>
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
