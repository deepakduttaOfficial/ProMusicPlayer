import {
  Box,
  HStack,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const SmMusic = () => {
  return (
    <HStack maxW="300px" borderRadius="md" overflow="hidden">
      <Image src={`https://bit.ly/2Z4KKcF`} alt={"Musuc"} w={85} />

      <HStack py={2} px={1} spacing={1}>
        <LinkBox as={LinkOverlay} href="#" role={"group"} textDecor="none">
          <Box
            mt="1"
            fontWeight="semibold"
            lineHeight="tight"
            noOfLines={1}
            textDecor="none"
          >
            Dhak Baja Kashor Baja
          </Box>

          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            noOfLines={1}
            // _groupHover={{ textDecor: "none" }}
            textDecor="none"
          >
            Shreya Ghoshal, Jeet Gannguli
          </Box>
        </LinkBox>

        <IconButton>
          <MdOutlineFavoriteBorder size={25} />
        </IconButton>
      </HStack>
    </HStack>
  );
};

export default SmMusic;
