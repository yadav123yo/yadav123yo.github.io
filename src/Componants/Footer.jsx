import {
  Box,
  Container,
  Button,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { GoMail } from "react-icons/go";


 function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue("red.50", "gray.900")}
      color={useColorModeValue("red.700", "red.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text 
        color={colorMode == "light" ? "red" : "white"}
        >@ 2022 Yogesh. All rights belongs Yogesh Yadav.</Text>
        <Box>
          <Button
            size={["sm", "md"]}
            colorScheme="none"
            color={colorMode == "light" ? "red" : "white"}
            leftIcon={<PhoneIcon />}
          >
            +91 74869-37139
          </Button>
          <Button
            size={["sm", "md"]}
            colorScheme="none"
            color={colorMode == "light" ? "red" : "white"}
            leftIcon={<GoMail />}
          >
            <a href="mailto: yy072156@gmail.com">
              Click For Connect with mail
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}


export default Footer