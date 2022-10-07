import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import NavItem from "../navbar.js/NavItem";

const Searchbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <NavItem icon={BsSearch} onClick={onOpen}>
        Search
      </NavItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <FormControl as={"form"}>
              <InputGroup py={3}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsSearch color="gray.300" size={20} />}
                  mt={"7px"}
                />
                <Input
                  placeholder="Search your music"
                  size="lg"
                  variant="unstyled"
                  ml={2}
                />
              </InputGroup>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Searchbar;
