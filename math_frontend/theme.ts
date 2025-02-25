import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#003d5c",
    },
    secondary: {
      main: "#001b29",
    },
    background: {
      default: "#000e14",
      paper: "#003d5c",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto Mono, monospace",
  },
});

export default theme;
