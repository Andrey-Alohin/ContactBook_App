import { createTheme } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  palette: {
    primary: grey,
    secondary: amber,
    background: {
      default: grey[50],
    },
    error: {
      main: "#a92626",
      light: "#a92626",
      dark: "#FF745F",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: grey[100],
        },
      },
    },
    dark: {
      palette: {
        secondary: amber,
        background: {
          default: grey[900],
          paper: grey[800],
        },
      },
    },
  },
});
