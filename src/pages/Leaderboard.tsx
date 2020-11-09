import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Spinner,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import { ILeaderboard } from "../types/interface";

export default function Leaderboard() {
  const dummyPlayer = {
    email: "-",
    gamesWonWeek: 0,
    firstname: "-",
    lastname: "-",
    username: "-",
    createdAt: {
      _seconds: 0,
      _nanoseconds: 0,
    },
    gamesWonDay: 0,
    totalGamesWon: 0,
  };
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(true);
  const leaderboard = useRef({
    allTime: [dummyPlayer],
    week: [dummyPlayer],
    day: [dummyPlayer],
  } as ILeaderboard);

  async function requestLeaderboard(timeRange: string) {
    if (
      timeRange !== "allTime" &&
      timeRange !== "week" &&
      timeRange !== "day"
    ) {
      return;
    }
    await axios
      .get(
        "https://asia-southeast2-findmymines.cloudfunctions.net/getTopScorers",
        {
          params: {
            numOfPlayers: 1,
            timeRange,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.isOk) {
          leaderboard.current[timeRange] = data.topPlayers;
        }
      });
  }

  const requestLeaderboards = useCallback(async () => {
    await requestLeaderboard("allTime");
    await requestLeaderboard("week");
    await requestLeaderboard("day");
    setLoading(false);
  }, []);

  useEffect(() => {
    requestLeaderboards();
  }, [requestLeaderboards]);

  const leaderboardView = (
    <Flex direction="column" justify="center" alignItems="center">
      <Heading as="h4" mb="2">All Time</Heading>
      <Text color="gray.400">
        {leaderboard.current.allTime[0].username} :{" "}
        {leaderboard.current.allTime[0].totalGamesWon} Wins
      </Text>
      <Text color="gray.400">{leaderboard.current.allTime[0].email}</Text>
      <Divider />
      <Heading as="h4" mb="2">Weekly</Heading>
      <Text color="gray.400">
        {leaderboard.current.week[0].username} :{" "}
        {leaderboard.current.week[0].gamesWonWeek} Wins
      </Text>
      <Text color="gray.400">{leaderboard.current.week[0].email}</Text>
      <Divider />
      <Heading as="h4" mb="2">Daily</Heading>
      <Text color="gray.400">
        {leaderboard.current.day[0].username} :{" "}
        {leaderboard.current.day[0].gamesWonDay} Wins
      </Text>
      <Text color="gray.400">{leaderboard.current.day[0].email}</Text>
      <Divider />
      <Link to="/">
        <Button width="full" mt="2" fontSize="sm">
          Back
        </Button>
      </Link>
    </Flex>
  );

  return (
    <Flex
      width="full"
      height="100%"
      align="center"
      minHeight="100vh"
      justifyContent="center"
      bg={colorMode === "light" ? "gray.50" : "gray.700"}
    >
      <Box
        p={10}
        px={20}
        bg={colorMode === "light" ? "white" : "gray.600"}
        borderRadius={10}
        boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      >
        {loading ? <Spinner /> : leaderboardView}
      </Box>
    </Flex>
  );
}
