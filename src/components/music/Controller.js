import React from "react";
import { VStack } from "@chakra-ui/react";
import MusicLen from "./MusicLen";
import MusicController from "./musicController/MusicController";

const Controller = () => {
  return (
    <VStack w={400} py={1}>
      <MusicController />
      <MusicLen />
    </VStack>
  );
};

export default Controller;
