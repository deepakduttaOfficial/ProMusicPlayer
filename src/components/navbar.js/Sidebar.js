import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Image,
  Divider,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";

import NavItem from "./NavItem";
import Logo from "../../images/musicLogo.png";
import Searchbar from "../search";

const Sidebar = ({ onClose, ...rest }) => (
  <Box
    transition="3s ease"
    bg={useColorModeValue("gray.300", "brand.200")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
    overflow={"scroll"}
    className={"sidebar"}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Link href="/" textAlign={"center"}>
        <Image src={Logo} alt="Brand Logo" borderRadius="full" boxSize="40px" />
      </Link>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
    <NavItem icon={FiHome} link="/">
      Home
    </NavItem>
    <Searchbar />
    <NavItem icon={MdFavoriteBorder} link="/">
      Favourites songs
    </NavItem>
    <NavItem icon={RiPlayListAddLine} link="/">
      Create Playlist
    </NavItem>
    <Divider my={5} />
  </Box>
);

export default Sidebar;
