
import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
  Tag,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="red"
            _hover={{ bgColor: "red.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="red"
            _hover={{ bgColor: "red.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default function Card({
  img,
  tag,
  heading,
  content,
  deploy,
  git,
  tsTags,
  features,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"95%"}
        w={"90%"}
         // h={[, "2xl"]}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
         marginLeft={"-15px"}
        >
        <Box
        className="cardZoom"
          h={["160px", "210px"]}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={img} layout={"fill"} />
        </Box>
        <Stack pt={[1, 20]}>
          <BlogTags tags={tag} />
          <TechStackTags tags={tsTags} />
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {heading}
          </Heading>
          <Text color={"gray.500"}>{content}</Text>
          <Text fontWeight={700} color={"grey.700"}>{features}</Text>
        </Stack>
        <Stack direction={"row"} pt={5} flexDirection={"row"} justifyContent={"space-between"} marginTop={"10%"} >
          <Button
            bg={"red.400"}
            size={"sm"}
            rounded={"md"}
            color={"white"}
            _hover={{ bg: "red.500" }}
             rightIcon={<BsGithub />}
          
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={git}
            >
              Github
            </Link>
          </Button>
          <Button
            bg={"red.300"}
            color={"white"}
            size={"sm"}
            rounded={"md"}
            _hover={{ bg: "red.600" }}
             rightIcon={<BsLink45Deg />}
          
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={deploy}
              
            >
              Deployment
            </Link>
          </Button>
          
        </Stack>
      </Box>
    </Center>
  );
}