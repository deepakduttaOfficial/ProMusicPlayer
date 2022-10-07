import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { IoMdPause } from "react-icons/io";
import { RiRepeatFill } from "react-icons/ri";

const IconButtonCuz = ({ children }) => {
  const iconColor = useColorModeValue("gray.600", "#ffffff");
  return (
    <IconButton
      bg={"transparent"}
      color={"gray.500"}
      _hover={{ bg: "transparent", color: iconColor }}
      _focus={{ color: iconColor }}
    >
      {children}
    </IconButton>
  );
};

const MusicController = () => {
  return (
    <HStack>
      <IconButtonCuz>
        <BiShuffle size={27} />
      </IconButtonCuz>

      <IconButtonCuz>
        <MdSkipPrevious size={27} />
      </IconButtonCuz>

      <IconButtonCuz>
        <IoMdPause size={27} />
      </IconButtonCuz>

      <IconButtonCuz>
        <MdSkipNext size={27} />
      </IconButtonCuz>

      <IconButtonCuz>
        <RiRepeatFill size={27} />
      </IconButtonCuz>
    </HStack>
  );
};

export default MusicController;
