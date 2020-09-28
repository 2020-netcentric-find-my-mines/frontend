import React, { useContext } from "react";
import SocketEvent from "../socket-event";
import { Grid, Button } from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";
import { SocketContext } from "../contexts/useSocket";
import { Link } from "react-router-dom";

export default function Play(props: any) {
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);

  if (!gameState.started) {
    return (
      <div>
        <h2>Loading...</h2>
        <p>Make sure you create/join game before starting.</p>
        <Link to="/create">
          <Button>Click me to go back</Button>
        </Link>
      </div>
    );
  }

  const handleSelectCoordinate = (event: any) => {
    console.log(
      "SELECT_COORDINATE",
      event.target.dataset.x,
      event.target.dataset.y
    );
    emitEvent(SocketEvent.SELECT_COORDINATE, {
      x: +event.target.dataset.x,
      y: +event.target.dataset.y,
    });
  };

  let grid = [];
  for (let cellId: number = 0; cellId < 36; cellId++) {
    let cellBody;
    const cellState = gameState.coordinates[cellId];

    if (!cellState.isSelected) {
      cellBody = "🎯";
    } else if (!cellState.isBomb) {
      cellBody = "❌";
    } else {
      cellBody = "💣";
    }

    grid.push(
      <Button
        data-x={cellId % gameState.width}
        data-y={Math.floor(cellId / gameState.height)}
        variantColor="green"
        onClick={handleSelectCoordinate}
      >
        {cellBody}
      </Button>
    );
  }

  return (
    <Grid
      templateColumns={`repeat(${gameState.width}, 1fr)`}
      templateRows={`repeat(${gameState.height}, 1fr)`}
      gap={1}
    >
      {grid}
    </Grid>
  );
}
