import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("blackAlpha.100", "#011e3c")(props),
    },
  }),
};

const colors = {
  brand: {
    100: "#011e3c",
    200: "#071b2e",
  },
};

export const theme = extendTheme({ styles, colors });
