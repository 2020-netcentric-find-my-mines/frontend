import React, { useContext } from "react";
import { Button} from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { Link } from "react-router-dom";
import Board from "./components/Board";
import Info from "./components/Info";

export default function Play(props: any) {
  const { gameState } = useContext(GameContext);

  if (!gameState.started) {
    return (
      <div>
        <h2>Loading...</h2>
        <p>Make sure you create/join game before starting.</p>
        <Link to="/">
          <Button>Click me to go back</Button>
        </Link>
      </div>
    );
  }

  return (
    <> 
      <Info />
      <Board />
    </>
  );
}
