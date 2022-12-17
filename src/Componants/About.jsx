import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Typed from "react-typed";

export default function About() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      pt={10}
      id="About"
    >
      <Flex p={8} flex={1}  justify={"center"} align={"center"}>
        <Stack spacing={7} w={"full"} maxW={"xl"}>
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
                bg: "red.400",
                zIndex:-1,
              }}
            >
              Hi, I Am
            </Text>
            <br />
            <Text color={"red.400"} as={"span"}>
              <Typed
                strings={[
                  "Yogesh Yadav",
                  "A Full-Stack Developer",
                  "MERN Stack Developer"
                ]}
                typeSpeed={140}
                backSpeed={100}
                loop
              ></Typed>
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"grey.500"}>
          I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of web development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/115NsimOSrbquLjiOhx7_rzb-GEI1McbE/view?usp=sharing"
                target={"_blank"}
              >
                My Resume
              </Link>
            </Button>
         
            <Button rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}>
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/yadav123yo?tab=repositories"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
             bg={"red.400"}
             color={"white"}
             _hover={{
               bg: "green.500",
             }}
            >
              <Link
                href="https://www.linkedin.com/in/yadav-yogesh-583471233/"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>
            <Button
             bg={"red.400"}
             color={"white"}
             _hover={{
               bg: "green.500",
             }}
            >
              <Link href="https://github.com/yadav123yo" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"center"}>

          <Image
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            borderRadius={"30"}
            backdropBlur={"true"}
            
            src={
              "https://i.postimg.cc/J4GvBnfr/copy.jpg"
            }
          />
       
      </Flex>
    </Stack>
  );
}
