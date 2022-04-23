import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette }) => ({
  title: {
    fontSize: "40px",
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    display: " flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexGrow: 1,
    minHeight: "100%",
  },
  elem: {
    height: 250,
    width: 250,
    padding: 0,
    borderRadius: 12,

    display: " flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 8px",
    "& .MuiCardActionArea-root": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
    },
    "& a": {
      color: palette.primary.main,
      fontSize: 40,
      textDecoration: "none",
    },
  },
}));
