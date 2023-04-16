import Typewriter from "typewriter-effect";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
// import resume from "./Pardeep.Resume.pdf";
import resume from "./Pardeep-Singh-Resume.pdf";

export default function Home() {
  return (
    <Flex
      id="home"
      w={"full"}
      h={"100vh"}
      bgImage="url('./images/banner1.jpg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} color="white" fontSize={30}>
          <Text
            color={"white"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
            spacing={10}
          >
            Hello, I am Pardeep Singh
          </Text>
          <Typewriter
            options={{
              autoStart: true,
              fontWeight: "80px",
              loop: true,
              delay: 40,
              strings: [
                "Full-Stack Developer.",
                "Problem Solver.",
                "Tech Lover.",
              ],
            }}
          />

          <Stack direction={"row"} spacing={8}>
            <Button
              color={"black"}
              onClick={
                () =>
                  window.open(
                    "https://drive.google.com/file/d/1C4F0rQ4RvuRKR_epTcdsuNuqeGBlklMD/view?usp=sharing"
                  ) //https://drive.google.com/file/d/1W8q8J2HJw2u0xib643IrrpMlBsXedjwb/view?usp=sharing
              }
            >
              <a href={resume} download={resume}>
                Resume
              </a>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
