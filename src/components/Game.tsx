import React, { useContext } from "react";
import Lobby from "./Lobby";
import Play from "./Play";
import { Route, Switch, Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { GameContext } from "../contexts/useGame";

export default function Game(props: any) {
  const { gameState } = useContext(GameContext);

  return (
    <nav>
      <Box>
        <Switch>
          <Route path="/game">
            {gameState.started ? (
              <Redirect to="/play" />
            ) : (
              <Lobby
                selectedTab={props.selectedTab}
                setSelectedTab={props.setSelectedTab}
                emitEvent={props.emitEvent}
              />
            )}
          </Route>
          <Route path="/play">
            <Play />
          </Route>
        </Switch>
      </Box>
    </nav>
  );
}
