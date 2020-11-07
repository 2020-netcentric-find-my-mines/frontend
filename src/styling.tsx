import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    accentColor: "#1a365d",
  },
  borders: {
    ...theme.borders,
    "8px": 8,
  },
};

export default customTheme;
