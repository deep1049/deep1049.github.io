// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Stack,
//   Textarea,
//   useColorModeValue,
//   VStack,
// } from "@chakra-ui/react";
// import React, { useRef } from "react";
// import { BsPerson } from "react-icons/bs";
// import { MdOutlineEmail } from "react-icons/md";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_9hphowl",
//         "template_z5881pm",
//         e.target,
//         "4L82LBvWwmLT_PHeP"
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <Box>
//       <Flex
//         id="contact"
//         mt={40}
//         //   bg={useColorModeValue("gray.100", "gray.900")}
//         bg={"lightgrey"}
//         align="center"
//         justify="center"
//       >
//         <Box
//           borderRadius="lg"
//           m={{ base: 5, md: 16, lg: 10 }}
//           p={{ base: 5, lg: 16 }}
//         >
//           <Box>
//             <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
//               <Heading
//                 fontSize={{
//                   base: "4xl",
//                   md: "5xl",
//                 }}
//               >
//                 Contact Me
//               </Heading>

//               <Stack
//                 spacing={{ base: 4, md: 8, lg: 20 }}
//                 direction={{ base: "column", md: "row" }}
//                 bg={"lightgrey"}
//               >
//                 <form ref={form} onSubmit={sendEmail}>
//                   <Box
//                     bg={"white"}
//                     borderRadius="lg"
//                     p={8}
//                     color={useColorModeValue("gray.700", "whiteAlpha.900")}
//                     shadow="base"
//                   >
//                     <VStack spacing={5}>
//                       <FormControl isRequired>
//                         <FormLabel>Name</FormLabel>

//                         <InputGroup>
//                           <InputLeftElement children={<BsPerson />} />
//                           <Input
//                             type="text"
//                             name="user_name"
//                             placeholder="Your Name"
//                           />
//                         </InputGroup>
//                       </FormControl>

//                       <FormControl isRequired>
//                         <FormLabel>Email</FormLabel>

//                         <InputGroup>
//                           <InputLeftElement children={<MdOutlineEmail />} />
//                           <Input
//                             type="email"
//                             name="user_email"
//                             placeholder="Your Email address"
//                           />
//                         </InputGroup>
//                       </FormControl>

//                       <FormControl isRequired>
//                         <FormLabel>Message</FormLabel>

//                         <Textarea
//                           name="message"
//                           placeholder="Your Message to me"
//                           rows={6}
//                           resize="none"
//                         />
//                       </FormControl>

//                       <Button
//                         colorScheme="black"
//                         bg="red"
//                         color="white"
//                         _hover={{
//                           bg: "black.500",
//                         }}
//                         type="submit"
//                         isFullWidth
//                       >
//                         Send Message
//                       </Button>
//                     </VStack>
//                   </Box>
//                 </form>
//               </Stack>
//             </VStack>
//           </Box>
//         </Box>
//       </Flex>
//       <Flex justifyContent={"space-around"}>
//         {" "}
//         <Box fontSize={{ base: "lg", md: "md", sm: "sm" }}>
//           Mobile-No : +91-9115510154
//         </Box>
//         <Box>Gmail : Deepbedi1049@gmail.com</Box>
//       </Flex>
//     </Box>
//   );
// }
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

import { BsLinkedin, BsGithub, BsPerson } from "react-icons/bs";
import { useRef } from "react";

export default function Contact() {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9hphowl",
        "template_z5881pm",
        e.target,
        "4L82LBvWwmLT_PHeP"
      )
      .then(
        (response) => {
          toast({
            title: "Message Sent .",
            description: "Message Successfully sent.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container
      id="contact"
      maxW="full"
      mt={40}
      s
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="lightgrey"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Heading textAlign={"center"} margin={"1rem"}>
            Contact
          </Heading>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-9115510154
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        deepbedi1049@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Amritsar, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      as="a"
                      bg={"whiteAlpha.300"}
                      rounded={"full"}
                      color={"black"}
                      href="https://www.linkedin.com/in/pardeep-bedi/"
                      target="_blank"
                      _hover={{ bg: "whiteAlpha.500" }}
                      icon={<BsLinkedin size="28px" />}
                    />

                    <IconButton
                      as="a"
                      href="https://github.com/deep1049"
                      bg={"black"}
                      rounded={"full"}
                      color={"white"}
                      target="_blank"
                      _hover={{ bg: "blue.500" }}
                      icon={<FiGithub size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                {" "}
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.600">
                        Fill up the form to contact
                      </Text>
                      <form ref={form} onSubmit={sendEmail}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              name="user_name"
                              placeholder="Your Name"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              name="user_email"
                              placeholder="Your email address"
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name="message"
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{ bg: "lightblue" }}
                            margin={"1rem"}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
