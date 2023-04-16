import React from "react";

import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
  Badge,
  IconButton,
} from "@chakra-ui/react";

import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
const Project = () => {
  const ProjectData = [
    {
      title: "Envoy",
      link: "https://delicate-dragon-691c6f.netlify.app/",
      url: "https://github.com/deep1049/Envoy.com",
      description:
        "Envoy is a company that provides outsourcing services to various other organizations. Envoy helps you handle everything that comes through your company’s front door...",
      language: ["Html", " | ", "Css", " | ", "JavaScript", " | ", " "],
      image: "./images/envoy.png",
    },
    {
      title: "Sugar Cosmetics",
      link: "https://startling-mooncake-efccdc.netlify.app/",
      url: "https://github.com/deep1049/SugarCosmetics",
      description:
        "This project is a team project of 6 members, This is an e-commerce website that sells cosmetic products. We built this cloning project Within 5 days and this is our first project during the Masai curriculum",
      language: ["HTML", " | ", "CSS", " | ", "javaScript", " | ", ""],
      image: "./images/sugarcosmetics.png",
    },
    {
      title: "Max Fashion",
      link: "https://dainty-tulumba-dc1e5f.netlify.app/",
      url: "https://github.com/deep1049/successful-geese-7917",
      description:
        "This is a project based on E-Commerse site (Max fashion), I made this project in 5 days with ReactJS , React-Dom , Hooks and With static data. This project basically related to sell garments on online platform ",
      language: ["ReactJS", " | ", "HTML", " | ", " | ", "CSS"],
      image: "./images/max-fashion-app.png",
    },
    {
      title: "My Therasa",
      link: "https://superlative-lily-39163c.netlify.app/",
      url: "https://github.com/paprisaha1999/purring-recess-1554",
      description:
        "This project is a team project of 4 members , we had build this project in 5 days , this project basically clone of Mytherasa which is online cloth selling website, we made this project by using HTML , CSS and Javascript ",
      language: ["CSS", " | ", "HTML", " | ", "Javascript"],
      image: "./images/mytheresa-app.png",
    },
    {
      title: "Deep Tour & Travel",
      link: "https://effulgent-paletas-07bd64.netlify.app",
      url: "https://github.com/deep1049/grateful-achiever-4152",
      description:
        "This is my personal project. I made this project in the 4 unit of Masai within 5 days. This project is basically for booking hotels rooms online in various part of our country, I made this project by using Reactjs and Json server on backend. In this project I also made the admin panel to update or delete data",
      language: ["ReactJS", " | ", "Json"],
      image: "./images/deeptour-app.png",
    },
  ];
  return (
    <Box mt={40} id="projects">
      <Heading
        color={"black"}
        h={{ base: "20px", sm: "45px", lg: "55px" }}
        pl={{ base: "20%", sm: "35%", lg: "42%" }}
      >
        My Projects
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4} m={10} mt={8} rounded={"50%"}>
        {ProjectData.map((data) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={8}
              color="grey"
              bgColor={"lightgrey"}
            >
              <Image src={data.image} borderRadius={"20px"} h={"70%"} />
              <Text fontSize={"1.3rem"}>{data.title}</Text>
              <Text>{data.description}</Text>
              <Text>Tech-Stack : {data.language}</Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <IconButton
                  as="a"
                  href={data.url}
                  bg={"black"}
                  rounded={"full"}
                  color={"white"}
                  target="_blank"
                  _hover={{ bg: "blue.500" }}
                  icon={<FiGithub />}
                />
                <IconButton
                  as="a"
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"black"}
                  href={data.link}
                  target="_blank"
                  _hover={{ bg: "whiteAlpha.500" }}
                  icon={<BiLinkExternal />}
                />
              </Flex>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
