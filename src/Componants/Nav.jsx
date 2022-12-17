import {
    Heading,
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Stack,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { Link } from "react-scroll";
  
  const Links = ["About", "Skills",  "Projects", "Contact"];
  
  const NavLink = ({ children }) => (
    <Link
      style={{ cursor: "pointer" }}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      activeClass="active"
      to={children}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      {children}
    </Link>
  );
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <>
        <Box
          bg={useColorModeValue("red.50", "gray.900")}
          px={4}
          w={"100%"}
          position={"fixed"}
          style={{ zIndex: "999" }}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
            bg = {"red.500"}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Heading size={"lg"}>
                  <Link
                    style={{ cursor: "pointer" }}
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    activeClass="active"
                    to={"About"}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {" "}
                    Yogesh{" "}
                  </Link>
                </Heading>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"} gap={5}>
              <Button onClick={toggleColorMode}
               rounded={"full"}
               bg={"red.500"}
               color={"white"}
               _hover={{
                 bg: "green.500",
               }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                rounded={"full"}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                
                <a
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  activeClass="active"
                  href="https://drive.google.com/file/d/115NsimOSrbquLjiOhx7_rzb-GEI1McbE/view?usp=sharing" 
               target={"_blank"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Resume
                </a>
              </Button>
           
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/yadav-yogesh-583471233/"
                    >
                      Linkedin
                    </a>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <a target="_blank" href="https://github.com/yadav123yo">
                      Github
                    </a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }
  