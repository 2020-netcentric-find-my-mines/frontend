import React, { useContext } from "react";
import SocketEvent from "../../socket-event";
import { Grid, Box } from "@chakra-ui/core";
import { GameContext } from "../../contexts/useGame";
import { SocketContext } from "../../contexts/useSocket";

export default function Board() {
    const { gameState } = useContext(GameContext);
    const { emitEvent } = useContext(SocketContext);

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
    for (let cellId = 0; cellId < 36; cellId++) {
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
            <Box
            as="button"
            data-x={cellId % gameState.width}
            data-y={Math.floor(cellId / gameState.height)}
            w="35px"
            h="35px"
            bg={cellId % 2 === 0 ? "orange.400" : "green.400"}
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
            w={gameState.width * 35}
            gap={1}
        >
            {grid}
        </Grid>
    );
}