import React from "react"
import axios from "axios"
import { Flex, Text, Heading, Divider } from "@chakra-ui/core"
import { ILeaderboardData, ILeaderboardResponse, ITopPlayer } from "../types/interface"

export default function Leaderboard() {
    function requestLeaderboard(timeRange: string) {
        let topPlayers: ITopPlayer[] = []
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
                topPlayers = data.topPlayers
            }
        })
        return topPlayers
    }
    
    const allTimeLeaderboard = requestLeaderboard("allTime")
    const dayLeaderboard = requestLeaderboard("day")
    const weekLeaderboard = requestLeaderboard("week")

    return (
        <Flex direction="column" justify="center">
            <Heading as="h3">
                All Time
            </Heading>
            <Text>
                {allTimeLeaderboard[0].username} : {allTimeLeaderboard[0].totalGamesWon} Wins 
                {allTimeLeaderboard[0].email}
            </Text>
            <Divider />
            <Heading as="h3">
                Week
            </Heading>
            <Text>
                {weekLeaderboard[0].username} : {weekLeaderboard[0].gamesWonWeek} Wins 
                {weekLeaderboard[0].email}
            </Text>
            <Divider />
            <Heading as="h3">
                Day
            </Heading>
            <Text>
                {dayLeaderboard[0].username} : {dayLeaderboard[0].gamesWonDay} Wins 
                {dayLeaderboard[0].email}
            </Text>
        </Flex>
    )
}