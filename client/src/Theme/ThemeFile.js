import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#799496",
    },
    secondary: {
      main: "#e0e035",
    },
    neutral: {
      main: '#ACC196',
      contrastText: "#fff"
    },
    text: {
      primary: "#000000",
    },
  },
  // typography: {
  //   fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
  // },
});
export default Theme;
