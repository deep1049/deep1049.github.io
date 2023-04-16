import React from "react";
import {
  SiChakraui,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { Box, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import "./skill.css";
const Skills = () => {
  const technologies = [
    {
      name: "HTML",
      link: "https://html.com/html5/",
      icon: <FaHtml5 />,
      color: "red.600",
    },
    {
      name: "CSS",
      link: "https://www.w3.org/TR/CSS/#css",
      icon: <FaCss3Alt />,
      color: "green.400",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      icon: <FaGitAlt />,
      color: "red.500",
    },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript />,
      color: "yellow.400",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: <FaReact />,
      color: "blue.400",
    },

    {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      icon: <SiTypescript />,
      color: "blue.500",
    },
    {
      name: "Redux",
      link: "https://nodejs.org/en/",
      icon: <SiRedux />,
      color: "red.500",
    },
    {
      name: "SCSS",
      link: "https://nodejs.org/en/",
      icon: <SiCss3 />,
      color: "red.500",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: <FaBootstrap />,
      color: "purple.400",
    },

    {
      name: "Chakra UI",
      link: "https://chakra-ui.com/",
      icon: <SiChakraui />,
      color: "teal.400",
    },
    {
      name: "Material UI",
      link: "https://mui.com/",
      icon: <SiMui />,
      color: "blue.600",
    },
  ];
  return (
    <Box mt={20} mx={[4, 8, 16, 24]} id="skills">
      <Heading
        color={"black"}
        h={{ base: "20px", sm: "45px", lg: "55px" }}
        pl={{ base: "20%", sm: "35%", lg: "42%" }}
      >
        Skills
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8} className="anim">
        {technologies.map((t) => {
          return (
            <Link href={t.link} className="anim">
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                border="1px solid"
                borderColor={"gray.300"}
                rounded={"xl"}
                mx={8}
                p={2}
                backgroundColor={"lightgray"}
              >
                <Box fontSize={"3xl"} color={t.color}>
                  {t.icon}
                </Box>
                <Text fontSize={"md"}>{t.name}</Text>
              </Stack>
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
