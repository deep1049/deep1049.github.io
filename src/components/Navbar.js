import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./Navlink";
import resume from "./Pardeep-Singh-Resume.pdf";

const Links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },

  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w={"100%"}
        position={"fixed"}
        zIndex={999}
        bg={useColorModeValue("white")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontStyle={"normal"}>
              <strong>PS</strong>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.id}
                  name={link.name}
                  fontSize={15}
                  onClick={() => onClose()}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              {/* <MenuButton
                as={Button}
                // rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              > */}
              {/* <Avatar size={"lg"} src={"./images/mypic.png"} /> */}
              <Button
                bg="#0D74FF"
                color="white"
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
              {/* </MenuButton> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.id}
                  name={link.name}
                  w="xm"
                  onClick={() => onClose()}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
