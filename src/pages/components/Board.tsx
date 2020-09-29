import React, { useContext, useState } from "react";
import SocketEvent from "../../socket-event";
import { Grid, Box } from "@chakra-ui/core";
import { GameContext } from "../../contexts/useGame";
import { SocketContext } from "../../contexts/useSocket";

export default function Board() {
    const { gameState } = useContext(GameContext);
    const { emitEvent } = useContext(SocketContext);
    let [ selectedCell, setSelectedCell ] = useState(-1)

    const handleSelectCoordinate = (event: any) => {
        console.log(
            "SELECT_COORDINATE",
            event.target.dataset.x,
            event.target.dataset.y,
        );
        setSelectedCell(Number(event.target.dataset.x) + Number(event.target.dataset.y) * gameState.width);

        emitEvent(SocketEvent.SELECT_COORDINATE, {
            x: Number(event.target.dataset.x),
            y: Number(event.target.dataset.y),
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

        //magic chessboard formula 
        const cellColor = ((cellId % gameState.width) % 2 === (Math.floor(cellId / gameState.width)) % 2) ? "orange.400" : "green.400" 

        grid.push(
            <Box
                as="button"
                border="4px"
                borderColor={selectedCell === cellId ? "yellow.300" : cellColor}
                key={cellId}
                data-x={cellId % gameState.width}
                data-y={Math.floor(cellId / gameState.width)}
                w="35px"
                h="35px"
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
            w={gameState.width * 35}
            gap={0}
            alignItems="center"
        >
            {grid}
        </Grid>
    );
}