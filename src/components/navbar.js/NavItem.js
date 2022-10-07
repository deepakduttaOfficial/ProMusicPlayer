import { Flex, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, link, children, ...rest }) => {
  const itemBg = useColorModeValue("#A0AEC0", "#011e3c");
  const activeStyle = {
    backgroundColor: itemBg,
    color: "#ffffff",
    transform: "scale(1.04)",
    transition: "0.5s",
  };
  return (
    <Flex
      as={NavLink}
      to={link}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: itemBg,
        color: "#ffffff",
      }}
    >
      <Icon mr="4" fontSize="16" as={icon} />
      {children}
    </Flex>
  );
};

export default NavItem;
