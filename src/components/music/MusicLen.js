import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdGraphicEq } from "react-icons/md";

const MusicLen = () => {
  return (
    <HStack w={"full"}>
      <Box
        as="span"
        color={useColorModeValue("gray.700", "gray.300")}
        fontSize="sm"
      >
        2.30
      </Box>
      <Slider aria-label="slider-ex-4" defaultValue={30}>
        <SliderTrack bg={useColorModeValue("gray.400", "gray.700")}>
          <SliderFilledTrack bg={useColorModeValue("gray.600", "#fff")} />
        </SliderTrack>
        <SliderThumb boxSize={4}>
          <Box color="blue.500" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
      <Box
        as="span"
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize="sm"
      >
        6.30
      </Box>
    </HStack>
  );
};

export default MusicLen;
