import React from "react";
import {
  IconButton,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
  Link,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../../images/musicLogo.png";

const Topbar = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("gray.300", "brand.200")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      pos={"sticky"}
      top={0}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Link
        href="/"
        textAlign={"center"}
        display={{ base: "flex", md: "none" }}
      >
        <Image src={Logo} alt="Brand Logo" borderRadius="full" boxSize="40px" />
      </Link>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
      </HStack>
    </Flex>
  );
};

export default Topbar;
