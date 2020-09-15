import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/core'
  
export default function GameModeButton(props: any) {
    const link: string = props.link;
    const text: string = props.text;
    const isLoading: boolean = props.isLoading;

    return (
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button 
          variantColor="green" 
          variant="outline" 
          isLoading={props.loading[0] === link ? isLoading : undefined} 
          isDisabled={props.loading[0] === link ? undefined : isLoading} 
          onClick={() => { props.setLoading([link, true]) }}
        >
          {text}
        </Button>
      </Link>
    )
  }