import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
const GithubStats = () => {
  return (
    <Box mt={"3rem"}>
      <Heading
        color={"black"}
        h={{ base: "20px", sm: "45px", lg: "55px" }}
        pl={{ base: "20%", sm: "35%", lg: "42%" }}
      >
        Github-Stats
      </Heading>
      <Box px={["2%", "4%", "8%", "16%", "24%"]} py={8}>
        <GitHubCalendar
          username="deep1049"
          blockSize={10}
          blockMargin={5}
          color="teal"
          fontSize={16}
          m={40}
          w="60%"
        />
      </Box>
      <Box>
        {" "}
        <Heading m="3rem" textAlign={"center"}>
          Github_Statitics
        </Heading>
        <Box
          w={"60%"}
          m="auto"
          display={{ base: "column", md: "flex" }}
          gap="5rem"
          justifyContent={"center"}
        >
          <Box>
            <img
              src="https://github-readme-stats.vercel.app/api?username=deep1049&show_icons=true&count_private=true&hide_border=true"
              alt="pardeep"
              // width={"415px"}
              height="280px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GithubStats;
