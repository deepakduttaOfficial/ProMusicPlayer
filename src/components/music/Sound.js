import {
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

const Sound = () => {
  return (
    <HStack w={{ base: "full", md: 150 }}>
      <AiTwotoneSound size={30} />
      <Slider aria-label="slider-ex-1" defaultValue={100}>
        <SliderTrack bg={useColorModeValue("gray.400", "gray.600")}>
          <SliderFilledTrack bg={useColorModeValue("gray.600", "#fff")} />
        </SliderTrack>
        <SliderThumb boxSize={3} />
      </Slider>
    </HStack>
  );
};

export default Sound;
