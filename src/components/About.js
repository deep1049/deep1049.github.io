import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
export default function About() {
  return (
    <Stack id="about" minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        px={[10, 20, 30, 40]}
        flex={1}
        align={"center"}
        justifyContent="space-evenly"
        direction={["column", "column", "row"]}
      >
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          p={[4, 10]}
          m={[4, 8, 16, 10]}
          w={["300px"]}
          h={"300px"}
          src={"./images/mypic.png"}
        />

        <Stack spacing={5} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,

                zIndex: -1,
              }}
              lineHeight="1px solid grey"
            >
              About Me
            </Text>
          </Heading>
          <Text p={4} textAlign={"left"} fontSize={"xl"} color={"gray.500"}>
            A passionate Aspiring Full Stack Developer skilled in MERN stack.
            Has 1000+ hours of practical coding experience and is proficient in
            HTML, CSS, and ReactJS. Looking forward to working in an
            organization that is driven by hard work and professionalism where I
            can enhance my skills and knowledge.
          </Text>
          <Stack direction={"row"}>
            <IconButton
              as="a"
              href="https://github.com/deep1049"
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
              href="https://www.linkedin.com/in/pardeep-bedi/"
              target="_blank"
              _hover={{ bg: "whiteAlpha.500" }}
              icon={<FaLinkedinIn />}
            />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
