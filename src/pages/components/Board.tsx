import React, { useContext } from "react";
import SocketEvent from "../../socket-event";
import { Grid, Box, useColorMode } from "@chakra-ui/core";
import { GameContext } from "../../contexts/useGame";
import { SocketContext } from "../../contexts/useSocket";

export default function Board() {
  const { gameState } = useContext(GameContext);
  const { emitEvent } = useContext(SocketContext);
  const { colorMode } = useColorMode();

  const handleSelectCoordinate = (event: any) => {
    console.log(
      "SELECT_COORDINATE",
      event.target.dataset.x,
      event.target.dataset.y
    );

    emitEvent(SocketEvent.SELECT_COORDINATE, {
      x: Number(event.target.dataset.x),
      y: Number(event.target.dataset.y),
    });
  };

  let grid = [];
  for (let cellId = 0; cellId < gameState.width * gameState.height; cellId++) {
    let cellBody;
    const cellState = gameState.coordinates[cellId];

    if (!cellState.isSelected) {
      cellBody = "🎯";
    } else if (!cellState.isBomb) {
      cellBody = "❌";
    } else {
      cellBody = "💣";
    }

    //magic chessboard formula
    const cellColor =
      (cellId % gameState.width) % 2 ===
      Math.floor(cellId / gameState.width) % 2
        ? "orange.200"
        : "green.200";

    grid.push(
      <Box
        as="button"
        border="4px"
        borderColor={cellColor}
        key={cellId}
        data-x={cellId % gameState.width}
        data-y={Math.floor(cellId / gameState.width)}
        width="50px"
        height="50px"
        bg={cellColor}
        onClick={handleSelectCoordinate}
      >
        {cellBody}
      </Box>
    );
  }

  return (
      <Grid
        templateColumns={`repeat(${gameState.width}, 1fr)`}
        templateRows={`repeat(${gameState.height}, 1fr)`}
        border="4px"
        borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
        w={gameState.width * 50 + 8}
        h={gameState.width * 50 + 8}
        gap={0}
      >
        {grid}
      </Grid>
  );
}
