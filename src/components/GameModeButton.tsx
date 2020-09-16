import React from 'react'
import SocketEvent from '../socket-event'
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/core'

export default function GameModeButton(props: any) {
  const link: string = props.link;
  const text: string = props.text;
  const isLoading: boolean = props.isLoading;
  const emitEvent = props.emitEvent;

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Button
        variantColor="green"
        variant={props.loading[0] === link ? "solid" : "outline"}
        // isLoading={props.loading[0] === link ? isLoading : undefined}
        // isDisabled={props.loading[0] === link ? undefined : isLoading}
        onClick={() => {
          props.setLoading([link, true]);
          switch (link) {
            case "/game/create":
              return console.log("Create")
            case "/game/join":
              return console.log("joinnnnn");
            case "/game/quick-game":
              return console.log("quickkkk");
          }
          
        }}
        margin="2"
      >
        {text}
      </Button>
    </Link>
  )
}