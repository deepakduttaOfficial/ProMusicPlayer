import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
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
      <MenuList px={5} as={VStack} alignItems={"flex-start"}>
        <SmMusic />
        <Divider />
        <Sound />
      </MenuList>
    </Menu>
  );
};

export default MobileController;
