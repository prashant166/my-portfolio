import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#E5EAFF",
    },
    secondary: {
      main: "#A6FFF6",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
