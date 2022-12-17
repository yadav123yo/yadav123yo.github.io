import {
  Container,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";


import Marquee from "react-fast-marquee";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";



export default function Skills() {
  return (
    <Container   maxW={"7xl"}  py={16} id="Skills">
     
          <Text
            textTransform={"uppercase"}
            color={"red.600"}
            fontWeight={700}
            fontSize={"4xl"}
            marginLeft={"40%"}
            p={3}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Skills
          </Text>
          <Marquee 
                        gradient={false} 
                        speed={90} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >


            <Box display={"flex"} gap={"23px"}  >

            <Box   borderWidth='3px' p='2' alignItems={"center"} color={"black.500"} >
              <Icon as={FaGithub} w={20} h={20}  />
              <Text marginLeft={"3"}>Github</Text>
            </Box>
           <Box borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={FaNodeJs} w={20} h={20} color={"green.500"}/>
              <Text marginLeft={"3"}>NodeJs</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={FaReact} w={20} h={20} color={"blue.300"}/>
              <Text marginLeft={"3"}>React</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={DiJavascript1} w={20} h={20} color={"yellow.500"} />
              <Text>Javascript1</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={SiRedux} w={20} h={20} color={"purple.500"} />
              <Text marginLeft={"3"}>Redux</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={SiCss3} w={20} h={20} color={"blue.500"} />
              <Text marginLeft={"5"}>Css3</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={SiHtml5} w={20} h={20} color={"orange.500"} />
              <Text marginLeft={"4"}>Html5</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={SiExpress} w={20} h={20} color={"red.700"} />
              <Text marginLeft={"3"}>Express</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"}  >
              <Icon as={SiMongodb} w={20} h={20} color={"green.500"} />
              <Text>MongoDB</Text>
            </Box>
            <Box  borderWidth='3px' p='2' alignItems={"center"} justifyItems={"center"}  >
              <Icon as={SiPostman} w={20} h={20} color={"yellow.500"} />
              <Text marginLeft={"2"}>Postman</Text>
            </Box>

            </Box>
            </Marquee>
    </Container>


  );
}
