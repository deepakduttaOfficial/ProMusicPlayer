import { Flex, Icon, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const NavItem = ({ icon, link, children, ...rest }) => {
  const itemBg = useColorModeValue("gray.400", "brand.100");
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: itemBg,
          color: "white",
        }}
        {...rest}
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
