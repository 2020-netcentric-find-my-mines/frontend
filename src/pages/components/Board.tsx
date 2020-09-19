import React from "react";
import { Grid, Button } from "@chakra-ui/core";

export default function Board() {
  let board = [];
  for (let cell: number = 0; cell < 36; cell++) {
    board.push(<Button variantColor="green">X</Button>);
  }

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={6}
    >
      {board}
    </Grid>
  );
}
