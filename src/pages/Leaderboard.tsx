import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Flex, Box, Text, Heading, Divider, Spinner, Button } from "@chakra-ui/core"
import { ITopPlayer } from "../types/interface"

export default function Leaderboard() {
    const dummyPlayer = {
        "email": "-",
        "gamesWonWeek": 0, 
        "firstname": "-",
        "lastname": "-",
        "username": "-",
        "createdAt": {
            "_seconds": 0,
            "_nanoseconds": 0
        },
        "gamesWonDay": 0,
        "totalGamesWon": 0
    }

    const [loading, setLoading] = useState(true)
    const [leaderboard, setLeaderboard] = useState({
        allTime: [dummyPlayer] as ITopPlayer[],
        week: [dummyPlayer] as ITopPlayer[],
        day: [dummyPlayer] as ITopPlayer[],
    })

    useEffect(() => {
        requestLeaderboard("allTime").then(
            () => requestLeaderboard("week")
        ).then(
            () => requestLeaderboard("day")
        ).then(
            () => setLoading(false)
        )
    //eslint-disable-next-line
    }, [])

    async function requestLeaderboard(timeRange: string) {
        if (timeRange !== "allTime" && timeRange !== "week" && timeRange !== "day") {
            return
        }
        axios.get("https://asia-southeast2-findmymines.cloudfunctions.net/getTopScorers", {
            params: {
                numOfPlayers: 1,
                timeRange,
            }
        }).then((response) => {
            console.log(response)
            const {data} = response
            if (data.isOk) {
                setLeaderboard({
                    ...leaderboard,
                    [timeRange]: data.topPlayers,
                })
            }
        })
    }

    const leaderboardView = (
        <Flex direction="column" justify="center" alignItems="center">
            <Heading as="h4">
                All Time
            </Heading>
            <Text>
                {leaderboard.allTime[0].username} : {leaderboard.allTime[0].totalGamesWon} Wins 
            </Text>
            <Text>
                {leaderboard.allTime[0].email}
            </Text>
            <Divider />
            <Heading as="h4">
                Week
            </Heading>
            <Text>
                {leaderboard.week[0].username} : {leaderboard.week[0].gamesWonWeek} Wins 
            </Text>
            <Text>
                {leaderboard.week[0].email}
            </Text>
            <Divider />
            <Heading as="h4">
                Day
            </Heading>
            <Text>
                {leaderboard.day[0].username} : {leaderboard.day[0].gamesWonDay} Wins 
            </Text>
            <Text>
                {leaderboard.day[0].email}
            </Text>
            <Divider />
            <Link to="/">
                <Button width="full" mt="2" fontSize="sm" color="gray.600">
                    Back
                </Button>
            </Link>
        </Flex>
    )

    return (
        <Flex
          width="full"
          height="100%"
          align="center"
          position="absolute"
          justifyContent="center"
          bg="gray.50"
        >
            <Box
                p={10}
                bg="white"
                borderRadius={10}
                boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            >
                { loading ? <Spinner /> : leaderboardView }
            </Box>
        </Flex>
    )
}