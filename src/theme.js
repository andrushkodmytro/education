import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({});

const shadows = defaultTheme.shadows;

shadows[1] = "0px 3px 10px rgba(0, 0, 0, 0.1)";

export default createTheme({
  palette: {
    primary: {
      main: "#006464",
    },
    secondary: {
      main: "#f0f8f8",
    },
    background: {
      paper: "#f0f7f7",
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          // borderWidth: 2,
          // backgroundColor: "red",
        },
      },
    },
  },
});
