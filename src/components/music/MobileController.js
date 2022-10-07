import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import SmMusic from "../card/SmMusic";
import Sound from "./Sound";

const MobileController = () => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <BsThreeDotsVertical />
      </MenuButton>
      <MenuList as={VStack} alignItems={"flex-start"}>
        <Box px={5} w={"full"}>
          <SmMusic />
        </Box>
        <Divider />
        <Box px={5} w={"full"}>
          <Sound />
        </Box>
      </MenuList>
    </Menu>
  );
};

export default MobileController;
