import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Flex, Box, Text, Heading, Divider, Spinner, Button } from "@chakra-ui/core"
import { ILeaderboardData, ILeaderboardResponse, ITopPlayer } from "../types/interface"

export default function Leaderboard() {
    const [loading, setLoading] = useState(true)

    function requestLeaderboard(timeRange: string) {
        if (timeRange !== "allTime" && timeRange !== "week" && timeRange !== "day") {
            return
        }
        axios.request<ILeaderboardData>({
            url: "https://asia-southeast2-findmymines.cloudfunctions.net/getTopScorers",
            params: {
                numOfPlayers: 1,
                timeRange,
            },
            transformResponse: (r: ILeaderboardResponse) => r.data
        }).then((response) => {
            // `response` is of type `AxiosResponse<ServerData>`
            const { data } = response
            // `data` is of type ServerData, correctly inferred
            if (data.isOk) {
                leaderboard[timeRange] = data.topPlayers
                setLoading(false)
            }
        })
    }

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

    const leaderboard = {
        allTime: [dummyPlayer] as ITopPlayer[],
        week: [dummyPlayer] as ITopPlayer[],
        day: [dummyPlayer] as ITopPlayer[],
    }

    requestLeaderboard("allTime")
    requestLeaderboard("week")
    requestLeaderboard("day")

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