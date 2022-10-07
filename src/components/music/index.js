import React from "react";
import { Box, Container, HStack, useColorModeValue } from "@chakra-ui/react";
import SmMusic from "../card/SmMusic";
import Controller from "./Controller";
import Sound from "./Sound";
import { useMediaQuery } from "@chakra-ui/react";
import MobileController from "./MobileController";

const MusicPlayer = () => {
  const [md] = useMediaQuery("(min-width: 48em)");
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pos="fixed"
      bottom={0}
      left={0}
      w={"full"}
      borderTop={"1px"}
      borderColor={useColorModeValue("gray.400", "#ffffff29")}
    >
      <Container
        as={HStack}
        maxW={"full"}
        py={3}
        px={{ base: 4, md: 8 }}
        justifyContent="space-between"
      >
        {md && <SmMusic />}
        <Controller />
        {md && <Sound />}
        {!md && <MobileController />}
      </Container>
    </Box>
  );
};

export default MusicPlayer;
